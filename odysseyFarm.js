var interval = 1500;
var random_display = 0;
var imageDir = "photos/";

var imageNum = 0;
imageArray = new Array();
imageArray[imageNum++] = new imageItem(imageDir + "trees.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "bees.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "veggies.jpg");

var totalImages = imageArray.length;

function imageItem(image_location)
{
    this.image_item = new Image();
    this.image_item.src = image_location;
}

function get_ImageItemLocation(imageObj)
{
    return (imageObj.image_item.src);
}

function getNextImage()
{
    imageNum = (imageNum+1) % totalImages;
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
    return(new_image);
}

function getPrevImage() 
{
    imageNum = (imageNum-1) % totalImages;
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
    return (new_image);
}

function prevImage(place)
{
    var new_image = getPrevImage();
    document[place].src = new_image;
}

function switchImage(place)
{
    var new_image = getNextImage();
    document[place].src = new_image;
    var recut_call = "switchImage('"+place+"')";
    timerID = setTimeout(recur_call, interval);

}


