$(function() {
    //  morris Area chart on dashboard///
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            ipay: 2667,
            WFN: null,
            TPC: 2647
        }, {
            period: '2010 Q2',
            ipay: 2778,
            WFN: 2294,
            TPC: 2441
        }, {
            period: '2010 Q3',
            ipay: 4912,
            WFN: 1969,
            TPC: 2501
        }, {
            period: '2010 Q4',
            ipay: 3767,
            WFN: 3597,
            TPC: 5689
        }, {
            period: '2011 Q1',
            ipay: 6810,
            WFN: 1914,
            TPC: 2293
        }, {
            period: '2011 Q2',
            ipay: 5670,
            WFN: 4293,
            TPC: 1881
        }, {
            period: '2011 Q3',
            ipay: 4820,
            WFN: 3795,
            TPC: 1588
        }, {
            period: '2011 Q4',
            ipay: 11173,
            WFN: 5000,
            TPC: 2000
        }, {
            period: '2012 Q1',
            ipay: 10687,
            WFN: 4460,
            TPC: 2028
        }, {
            period: '2012 Q2',
            ipay: 8432,
            WFN: 5713,
            TPC: 1791
        }],
        xkey: 'period',
        ykeys: ['ipay', 'WFN', 'TPC'],
        labels: ['ipay', 'WFN', 'TPC'],
        pointSize: 1,
        //hideHover: 'auto',
        resize: true
    });
    //  morris donut chart on dashboard///
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
