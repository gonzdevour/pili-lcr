function ideasDB(o,t){var i,n;t="function"==typeof t?t:function(o){console.log(o)},void 0!==o&&("object"!=typeof o&&(o=[o]),i="post",n=JSON.stringify([{sid:"pili_show_2018",value:o}]),$.ajax({type:i,url:"https://ideaschain.com.tw/iot/v1/rawdata/8512864317053922",crossDomain:!0,headers:{AK:"pXkNXUc2kLqsGmtQ","content-type":"application/json"},data:n,success:function(o){t(!0)},error:function(o){t(!1)}}))}