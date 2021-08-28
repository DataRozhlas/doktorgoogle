let chartWidth =
 document.getElementById("graf").offsetWidth > 600
   ? 600
   : document.getElementById("graf").offsetWidth;
 
  
  Highcharts.chart('graf', {
    chart: {
      type: 'bar',
      //width: chartWidthNehody,
      events: {
        load() {
          onChartLoad(this);
        },
      },
  
    },
    title: {
      text: 'Lidé ve spojitosti se zdravím na internetu nejčastěji hledají',
      useHTML: true,
      align: screenLeft,
    },
    subtitle: {
      text: 'Více než polovinu respondentů zajímají informace o konkrétních zdravotních zdravotních potížích',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
      align: screenLeft,
    },
    xAxis: {
      categories: ['konkrétní potíže',
      'očkování, vakcíny',
      'konkrétní léčiva',
      'životní styl',
      'vlastní diagnoza',
      'psychické potíže',
      'hodnocení lékařů a zdravotních zaříženích',
      'tipy na prevenci'],
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: 'procent respondentů souhlasí',
      },
      // labels: {
      //   formatter: function() {
      //     if (this.isLast) {
      //       return this.value + '<br>' +
      //                   '<span class="light-gray-text">jízd za</span>' + '<br>' +
      //                   '<span class="light-gray-text">návěstidla</span>'
      //     } else {
      //       return this.value
      //     }
      //   }
      // }
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: '',
      shared: false
    },
    exporting: {
      enabled: false,
    },
    credits: {
      href: '',
      text: 'Postoj Čechů k telemedicíně – data z průzkumu týkající se samodiagnostiky, Ipsos Healthcare',
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
        // enableMouseTracking: false, // odkomentuj, pokud nechces tooltip
        pointPadding: 0,
      },
    },
    series: [
      {
        name: 'procent pacientů souhlasí',
        data: [{ y: 52, color: colors['2020'] },
          { y: 41, color: colors['2020'] },
          { y: 40, color: colors['2020'] },
          { y: 32, color: colors['2020'] },
          { y: 18, color: colors['2020'] },
          { y: 17, color: colors['2019'] },
          { y: 17, color: colors['2020'] },
          { y: 13, color: colors['2020'] }
        ],
      },
    ],
  });