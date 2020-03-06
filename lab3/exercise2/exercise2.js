let counter = 0;

function next(){
    switch(document.getElementById("imageDisplayed").src){
        case "https://i.redd.it/3tb4vxbbfyh21.jpg":
            document.getElementById("imageDisplayed").src = "https://i.imgflip.com/g7u55.jpg";
            break;
        case "https://i.imgflip.com/g7u55.jpg":
            document.getElementById("imageDisplayed").src = "https://media.tenor.com/images/df8c44a1d20ab367fdcb21880985fd33/tenor.gif";
            break;
        case "https://media.tenor.com/images/df8c44a1d20ab367fdcb21880985fd33/tenor.gif":
            document.getElementById("imageDisplayed").src = "https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/Linkbait-Hacker-Slash-News-Dot-Considere_B13B/page-404-error-page-not-found-cat_a8539737-26a3-4408-868f-04f73e855df3.jpg";
            break;
        case "https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/Linkbait-Hacker-Slash-News-Dot-Considere_B13B/page-404-error-page-not-found-cat_a8539737-26a3-4408-868f-04f73e855df3.jpg":
            document.getElementById("imageDisplayed").src = "https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/How-To-Talk-About-Data-in-Machine-Learning.jpg";
            break;
        case "https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/How-To-Talk-About-Data-in-Machine-Learning.jpg":
            document.getElementById("imageDisplayed").src = "https://i.redd.it/3tb4vxbbfyh21.jpg";
            break;
        default:
            break;
    }
}