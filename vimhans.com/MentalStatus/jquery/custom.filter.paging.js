/*
Developed by: Ashwani Dwivedi
*/
(function ($) {

    //filter eventbind start
    bind_filterevent = function (table) {
            
        table.find('tr:gt(0)').addClass("matchedrow");

        var filtername = 'divfilter' + table.attr("id");
        var filterbox = 'txt' + table.attr("id");
        var clearfilter = 'img' + table.attr("id");

        var currentpage = 'hidCurrentPage' + table.attr("id");
        var show_per_page = 'hidshowperpage' + table.attr("id");
        var matchedrowcount = 'hidmatchedrowcount' + table.attr("id");

        $('div[id$=' + filtername + ']').remove();
        var $filter = $('<div id=' + filtername + ' class="custom_pager" style="display:inline-block;height:40px;"></div>');

        var filter_html = 'Search: <input id=' + filterbox + ' maxlength="30" size="30" type="text" style="height:30px;width:450px;font-weight:bold;font-size:14px;border-color:#C0C0C0;border-width:1.5px;border-radius:5px;border-style:solid;border-width:thin" class="filterbox"  />';
        filter_html += '<img id=' + clearfilter + ' src="images/cross.png"  title="Click to clear filter." alt="Clear Filter Image" class="clearfilter" />';
        filter_html += '<input type="hidden" id=' + currentpage + ' />';
        filter_html += '<input type="hidden" id=' + show_per_page + ' />';
        filter_html += '<input type="hidden" id=' + matchedrowcount + ' />';
        ($filter).append(filter_html);

        $filter.insertBefore(table);

        $filter.find('img[id$=' + clearfilter + ']').bind('click', function (event) {
            $filter.find('input[id$=' + filterbox + ']').val('');
            var rowcount = searchTable(table, this.value);
            //$filter.find('input[id$=' + matchedrowcount + ']').val(rowcount);
            //$filter.find('input[id$=' + matchedrowcount + ']').trigger('change');
            $filter.find('input[id$=' + matchedrowcount + ']').val(rowcount).trigger('change');

            var divnorecord = 'divNoRecords' + table.attr("id");
            $('div[id^=' + divnorecord + ']').remove();
        });

        $filter.find('input[id$=' + filterbox + ']').bind('keypress', function (event) {
            if (event.which == 13) {
                event.preventDefault();
            }
        });

        $filter.find('input[id$=' + filterbox + ']').bind('keyup', function (event) {

            var rowcount = searchTable(table, this.value);
            //$filter.find('input[id$=' + matchedrowcount + ']').trigger('change');
            //$filter.find('input[id$=' + matchedrowcount + ']').val(rowcount);
            $filter.find('input[id$=' + matchedrowcount + ']').val(rowcount).trigger('change');

            if (rowcount > 0) {
                var divnorecord = 'divNoRecords' + table.attr("id");
                $('div[id^=' + divnorecord + ']').remove();
            }
        });
    }
    //filter eventbind end

    //visibility of pageing start
    visibility_paging = function (table) {

        var show_per_page = parseInt($('#hidshowperpage' + table.attr("id")).val());

        var spnFirst = 'spnFirst' + table.attr("id");
        var spnPreview = 'spnPreview' + table.attr("id");
        var spnPagelink = 'spnPagelink' + table.attr("id");
        var spnNext = 'spnNext' + table.attr("id");
        var spnLast = 'spnLast' + table.attr("id");

        $('span[name=' + spnFirst + ']').bind('click', function () {

            go_to_page(0, table);
        });
        $('span[name=' + spnPreview + ']').bind('click', function () {

            previous(table);
        });

        $('span[name=' + spnPagelink + ']').bind('click', function () {
            //var pagenum = parseInt($(this).text()) - 1;
            var pagenum = $(this).attr('longdesc');

            go_to_page(pagenum, table);
        });

        $('span[name=' + spnNext + ']').bind('click', function () {

            next(table);
        });
        $('span[name=' + spnLast + ']').bind('click', function () {

            var total_items = table.find("tr.matchedrow").size();

            var total_pages = Math.ceil(total_items / show_per_page);
            var totpage = parseInt(total_pages) - 1;
            go_to_page(totpage, table);
        });


        var total_items = table.find("tr.matchedrow").size();

        var total_pages = Math.ceil(total_items / show_per_page);
        var page_num = 0;
        var start_page = parseInt(page_num) - 4;
        var end_page = parseInt(page_num) + 4;

        if (start_page < 0) {
            start_page = 0;
            end_page = (7 - parseInt(page_num)) + parseInt(page_num);
        }
        if (start_page >= 0) {
            start_page = (parseInt(page_num) - 3)

        }
        if (end_page > total_pages) {
            //end_page = parseInt(total_pages) - 1;
            end_page = total_pages;
        }
        if (parseInt(page_num) == 0) {
            $('span[name=' + spnPreview + ']').css('display', 'none');

        }
        else {
            $('span[name=' + spnPreview + ']').css('display', 'inline-block');

        }
        if (parseInt(page_num) == (parseInt(total_pages) - 1)) {
            $('span[name=' + spnNext + ']').css('display', 'none');
            $('span[name=' + spnLast + ']').css('display', 'none');
        }
        else {
            $('span[name=' + spnNext + ']').css('display', 'inline-block');
            $('span[name=' + spnLast + ']').css('display', 'inline-block');
        }

        $('span[name=' + spnPagelink + ']').css('display', 'none');
        var firstcheck = false;
        var lastcheck = false;
        for (var i = start_page; i < end_page; i++) {
            $('span[name=' + spnPagelink + '][longdesc=' + i + ']').css('display', 'inline-block');

            if (i == 0) {
                firstcheck = true;
            }
            if (i == (parseInt(total_pages) - 1)) {
                lastcheck = true;
            }
        }
        if (firstcheck === true) {

            $('span[name=' + spnFirst + ']').css('display', 'none');
        }
        else {

            $('span[name=' + spnFirst + ']').css('display', 'inline-block');
        }
        if (lastcheck === true) {

            $('span[name=' + spnLast + ']').css('display', 'none');
        }
        else {

            $('span[name=' + spnLast + ']').css('display', 'inline-block');
        }

    }
    //visibility of pageing start

    //start paging developed by ashwani dwivedi
    paginateIt = function (table, pagenoperpage) {
        pagenoperpage = pagenoperpage || 10; // optional if pagenoperpage not passed it set 10 default

        var show_per_page = parseInt(pagenoperpage);

        //var number_of_items = $('#content ul').children().size();

        var number_of_items = table.find("tr.matchedrow").size();

        //calculate the number of pages we are going to have
        var number_of_pages = Math.ceil(number_of_items / show_per_page);

        //set the value of our hidden input fields
        //$('#current_page').val(0);
        //$('#show_per_page').val(show_per_page);

        $('#hidCurrentPage' + table.attr("id")).val(0);
        $('#hidshowperpage' + table.attr("id")).val(show_per_page);

        var spnFirst = 'spnFirst' + table.attr("id");
        var spnPreview = 'spnPreview' + table.attr("id");
        var spnPagelink = 'spnPagelink' + table.attr("id");
        var spnNext = 'spnNext' + table.attr("id");
        var spnLast = 'spnLast' + table.attr("id");
        var spnPagingStatus = 'spnPagingStatus' + table.attr("id");

        var navigation_html = '<span class="previous_link" name=' + spnFirst + ' >First</span>';
        //var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
        navigation_html += '<span class="previous_link" name=' + spnPreview + ' >Prev</span>';
        var current_link = 0;
        while (number_of_pages > current_link) {
            //navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
            //            if (current_link > 2 && current_link < number_of_pages - 3) {
            //                navigation_html += '<span class="page_link" style="display:none;" longdesc="' + current_link + '" name=' + spnPagelink + '>' + (current_link + 1) + '</span>';
            //            }
            //            else {
            navigation_html += '<span class="page_link" longdesc="' + current_link + '" name=' + spnPagelink + '>' + (current_link + 1) + '</span>';
            //            }
            current_link++;
        }

        //navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
        navigation_html += '<span class="next_link" name=' + spnNext + '  >Next</span>';
        navigation_html += '<span class="next_link" name=' + spnLast + '  >Last</span>';
        var currentpage = parseInt($('#hidCurrentPage' + table.attr("id")).val()) + 1;
        navigation_html += '<span  name=' + spnPagingStatus + '  >Page ' + currentpage + ' of ' + number_of_pages + ' (' + number_of_items + ' items)</span>';
        //$('#page_navigation').html(navigation_html);

        var divnorecord = 'divNoRecords' + table.attr("id");



        var pagername = 'divpager' + table.attr("id");

        $('div[id$=' + pagername + ']').remove();

        var $pager = $('<div id=' + pagername + ' class="custom_pager"></div>');

        $pager.append(navigation_html);
        $pager.insertAfter(table).find('span.page_link:first').addClass('active');

        if (current_link == 0) {

            $('div[id$=' + pagername + ']').find('span[name=' + spnFirst + ']').remove();
            $('div[id$=' + pagername + ']').find('span[name=' + spnPreview + ']').remove();
            $('div[id$=' + pagername + ']').find('span[name=' + spnNext + ']').remove();
            $('div[id$=' + pagername + ']').find('span[name=' + spnLast + ']').remove();
            //$('div[id$=' + pagername + ']').remove();
            $('div[id^=' + divnorecord + ']').remove();
            $('<div id=' + divnorecord + '><table width="100%"><tbody><tr><td align="center" style="font-weight:bold;width:100%"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;<span style="font-style:Italic">No records found !</span></td></tr></table></div>').insertBefore($pager);

        }


        //add active_page class to the first page link
        //$('#page_navigation .page_link:first').addClass('active');

        //hide all the elements inside content div
        //$('#content ul').children().css('display', 'none');

        //and show the first n (show_per_page) elements
        // $('#content ul').children().slice(0, show_per_page).css('display', 'block');

        //$("#divUnAssignedTypeList table").find('tbody tr').css('display', 'none');
        //$("#divUnAssignedTypeList table tbody tr").slice(0, show_per_page).css('display', 'block');

        //$("#divUnAssignedTypeList table").find('tbody tr.matchedrow').hide().slice(0, show_per_page).show();
        table.find('tbody tr.matchedrow').hide().slice(0, show_per_page).show();
    }

    previous = function (table) {

        //new_page = parseInt($('#current_page').val()) - 1;
        new_page = parseInt($('#hidCurrentPage' + table.attr("id")).val()) - 1;
        //if there is an item before the current active link run the function
        var spnPreview = 'spnPreview' + table.attr("id");
        var spnPagelink = 'spnPagelink' + table.attr("id");
        var spnNext = 'spnNext' + table.attr("id");

        if ($('span[name=' + spnPagelink + '].active').prev('.page_link').length == true) {
            go_to_page(new_page, table);
        }

    }

    next = function (table) {

        //new_page = parseInt($('#current_page').val()) + 1;
        new_page = parseInt($('#hidCurrentPage' + table.attr("id")).val()) + 1;
        //if there is an item after the current active link run the function
        var spnPreview = 'spnPreview' + table.attr("id");
        var spnPagelink = 'spnPagelink' + table.attr("id");
        var spnNext = 'spnNext' + table.attr("id");

        if ($('span[name=' + spnPagelink + '].active').next('.page_link').length == true) {
            go_to_page(new_page, table);
        }

    }
    go_to_page = function (page_num, table) {


        //get the number of items shown per page
        //var show_per_page = parseInt($('#show_per_page').val());
        var show_per_page = parseInt($('#hidshowperpage' + table.attr("id")).val());

        //get the element number where to start the slice from
        start_from = page_num * show_per_page;

        //get the element number where to end the slice
        end_on = start_from + show_per_page;

        //hide all children elements of content div, get specific items and show them
        //$('#content ul').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
        //$("#divUnAssignedTypeList table tbody tr").slice(start_from, end_on).css('display', 'block');
        //$("#divUnAssignedTypeList table").find('tbody tr.matchedrow').hide().slice(start_from, end_on).show();
        table.find('tbody tr.matchedrow').hide().slice(start_from, end_on).show();

        //$('.page_link[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

        var spnFirst = 'spnFirst' + table.attr("id");
        var spnPreview = 'spnPreview' + table.attr("id");
        var spnPagelink = 'spnPagelink' + table.attr("id");
        var spnNext = 'spnNext' + table.attr("id");
        var spnLast = 'spnLast' + table.attr("id");
        var spnPagingStatus = 'spnPagingStatus' + table.attr("id");

        $('span[name=' + spnPagelink + '][longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

        //for visibility of paging start
        var total_items = table.find("tr.matchedrow").size();

        var total_pages = Math.ceil(total_items / parseInt(show_per_page));

        var start_page = parseInt(page_num) - 4;
        var end_page = parseInt(page_num) + 4;

        if (start_page < 0) {
            start_page = 0;
            end_page = (7 - parseInt(page_num)) + parseInt(page_num);
        }
        if (start_page >= 0) {
            start_page = (parseInt(page_num) - 3)

        }
        if (end_page > total_pages) {
            //end_page = parseInt(total_pages) - 1;
            end_page = total_pages;
        }
        if (parseInt(page_num) == 0) {
            $('span[name=' + spnPreview + ']').css('display', 'none');

        }
        else {
            $('span[name=' + spnPreview + ']').css('display', 'inline-block');

        }
        if (parseInt(page_num) == (parseInt(total_pages) - 1)) {
            $('span[name=' + spnNext + ']').css('display', 'none');
            $('span[name=' + spnLast + ']').css('display', 'none');
        }
        else {
            $('span[name=' + spnNext + ']').css('display', 'inline-block');
            $('span[name=' + spnLast + ']').css('display', 'inline-block');
        }

        $('span[name=' + spnPagelink + ']').css('display', 'none');
        var firstcheck = false;
        var lastcheck = false;
        for (var i = start_page; i < end_page; i++) {
            $('span[name=' + spnPagelink + '][longdesc=' + i + ']').css('display', 'inline-block');

            if (i == 0) {
                firstcheck = true;
            }
            if (i == (parseInt(total_pages) - 1)) {
                lastcheck = true;
            }
        }
        if (firstcheck === true) {

            $('span[name=' + spnFirst + ']').css('display', 'none');
        }
        else {

            $('span[name=' + spnFirst + ']').css('display', 'inline-block');
        }
        if (lastcheck === true) {

            $('span[name=' + spnLast + ']').css('display', 'none');
        }
        else {

            $('span[name=' + spnLast + ']').css('display', 'inline-block');
        }
        var currentpage = parseInt(page_num) + 1;
        $('span[name=' + spnPagingStatus + ']').html('Page ' + currentpage + ' of ' + total_pages + ' (' + total_items + ' items)');
        //for visibility of paging end

        //update the current page input field
        //$('#current_page').val(page_num);
        $('#hidCurrentPage' + table.attr("id")).val(page_num);

    }
    //start paging developed by ashwani dwivedi

    //for search content in table start
    searchTable = function (table, inputVal) {

        //alert(inputVal);
        var rowscount = 0;

        $.fn.exists = function () { 
        //alert('dd');
        return this.length > 0;
        
         } // for object exsitance
            
        if ($(table).exists()) { //block table existance
            //alert(inputVal);
            table.find('tr:gt(0)').each(function (index, row) {
                
                var allCells = $(row).find('td');
                if (allCells.length > 0) {
                    var found = false;
                    allCells.each(function (index, td) {
                        var regExp = new RegExp(inputVal, 'i');

                        if (regExp.test($(td).text())) {
                            found = true;
                            return false;
                        }
                    });

                    if (found == true) {
                        rowscount = rowscount + 1;
                        $(row).show();
                        $(row).addClass("matchedrow");

                    } else {
                        $(row).hide();
                        $(row).removeClass('matchedrow');

                    }

                }
            });
            var showperpage = parseInt($('#hidshowperpage' + table.attr("id")).val());
            paginateIt(table, showperpage);

            visibility_paging(table);

        } //block table existance

        return rowscount;
    }
    //for search content in table end

})(jQuery);