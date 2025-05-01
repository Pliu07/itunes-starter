




function run() {

    const artInput = document.getElementById("artistInput");
    var artist = artInput.value;

    const numInput = document.getElementById("numberInput");
    var limit = numInput.value;
    



    $.ajax({
        url: 'https://itunes.apple.com/search?media=music&term=' + artist + "&limit=" + limit,
        dataType: "json",
        success: process
    });
}

function process(data) {
    
    console.log(data)
    

    let tableHTML = '';
    let resultcount = data.results.length;
    if (resultcount ==0) {
        document.getElementById("output").innerHTML = "<tr><td>" + "No results found" + "</td></tr>";
        return; 
    }

    for(let i = 0; i<(resultcount); i++){//figure out the limit, cuz limit doesn't work

        var d = data.results[i]
        let songrank = i+1
        


        tableHTML += "<tr>"
        tableHTML += "<td>" + songrank + "</td>"
        tableHTML += "<td>" + d.artistName + "</td>"
        tableHTML += "<td>" + d.trackName + "</td>"
        tableHTML += "<td>" + d.collectionName + "</td>"
        tableHTML += "<td><audio controls src='" + d.previewUrl + "'></audio></td>"
        tableHTML += "<td><img src='" + d.artworkUrl100 + "' alt='Album Art'></td>"
      

        tableHTML += "</tr>";

    }

    

    /*  loop over data and build table rows so that they come
        out like tableHTML += "<tr><td>" + data[i].songName + "</td></tr>"    */
    
    //add completed table into HTML table tag
    document.getElementById("output").innerHTML = tableHTML;
    
}
