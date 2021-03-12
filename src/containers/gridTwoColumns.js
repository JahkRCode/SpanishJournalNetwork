export const gridTwoColumns = (list) => {
    let newArticles = [];
    let articles = list;
    
    let count = 1;
    let vessel = {};
    if (articles){
        articles.forEach(element => {
            if(element.article_image_url){
                if (count ==1) {
                    //console.warn("*****GRID 1: " + JSON.stringify(element.article_image_url));
                    vessel["blockOne"] = element;
                    count++;
                } else {
                    //console.warn("*****GRID 2: " + JSON.stringify(element.article_image_url));
                    vessel["blockTwo"] = element;
                    newArticles.push(vessel);
                    count = 1;
                    vessel = {};
                }
            }
        });
    }
    return newArticles;
}