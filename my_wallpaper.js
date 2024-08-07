//your parameter variables go here!
var canvasX = 200;
var canvasY = 200;
var pxsize =12;
let line1 = [254, 154, 182] 
let line2 = [254,255,210] 
let line3 = [254,198, 212] 
let line4 = [255, 215, 223]
let star1 = [216,226,210]
let star2 = [201,224,198]
//(255, 215, 223) pink1 //(254,198, 212) pink2 //(254, 175, 197) pink3 //(254, 154, 182) pink4
//(243,204,243) pastel purple //(155,134,189) dark purple 
//(216,226,210) pistachio green //(201,224,198) pastel green
//(226,228,207) light sage green //(203,212,186) sage green //(137,162,133) dark sage green
//(225,213,237) light pastel pp //(209,193,228) pastelpp //(195,171,219) purple //(184,149,210) dark pp
//(218,213,245) pastel ppblue //(196,189,236) darker
//(211, 228, 244) pastel blue //(169,194,224) blue2 //(144,173,207) blue3 //(97, 127,158) dark blue
//(254,255,210) light yellow // (245,231,178) dark yellow

 function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER); //DEVELOP_GLYPH //GRID_WALLPAPER //GLIDE_WALLPAPER
  pWallpaper.resolution(NINE_PORTRAIT); //NINE_LANDSCAPE  //FIT_TO_SCREEN //NINE_PORTRAIT
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
    background(245, 237, 237);
    noStroke();

}

//draw this function loops, the code within read throught repetedly while running
function my_symbol(){
 {  square(pxsize*8, pxsize*6, pxsize);
    fill(line1);
    square(pxsize*9, pxsize*5, pxsize);
    fill(line1);
    rect(pxsize*10, pxsize*4, pxsize*2, pxsize);
    fill(line1);
    square(pxsize*12, pxsize*5, pxsize);
    fill(line1);
    rect(pxsize*13, pxsize*6, pxsize, pxsize*2);
    fill(line1);
    square(pxsize*12, pxsize*8, pxsize);
    fill(line1);
    square(pxsize*11, pxsize*9, pxsize);
    fill(line1);
    square(pxsize*10, pxsize*10, pxsize);
    fill(line1);
    square(pxsize*9, pxsize*11, pxsize);
    fill(line1);
    square(pxsize*8, pxsize*12, pxsize);
    fill(line1);
    square(pxsize*7, pxsize*11, pxsize);
    fill(line1);
    square(pxsize*6, pxsize*10, pxsize);
    fill(line1);
    square(pxsize*5, pxsize*9, pxsize);
    fill(line1);
    square(pxsize*4, pxsize*8, pxsize);
    fill(line1);
    rect(pxsize*3, pxsize*6, pxsize, pxsize*2);
    fill(line1);
    square(pxsize*4, pxsize*5, pxsize);
    fill(line1);
    rect(pxsize*5, pxsize*4, pxsize*2, pxsize);
    fill(line1);
    square(pxsize*7, pxsize*5, pxsize);
    fill(line1);
}
//heart line 2
{
    square(pxsize*8, pxsize*7, pxsize);
    fill(line2);
    square(pxsize*9, pxsize*6,pxsize);
    fill(line2);
    rect(pxsize*10, pxsize*5, pxsize*2, pxsize);
    fill(line2);
    rect(pxsize*12, pxsize*6, pxsize, pxsize*2);
    fill(line2);
    square(pxsize*11, pxsize*8, pxsize);
    fill(line2);
    square(pxsize*10, pxsize*9, pxsize);
    fill(line2);
    square(pxsize*9, pxsize*10, pxsize);
    fill(line2);
    square(pxsize*8, pxsize*11, pxsize);
    fill(line2);
    square(pxsize*7, pxsize*10, pxsize);
    fill(line2);
    square(pxsize*6, pxsize*9, pxsize);
    fill(line2);
    square(pxsize*5, pxsize*8, pxsize);
    fill(line2);
    rect(pxsize*4, pxsize*6, pxsize, pxsize*2);
    fill(line2);
    rect(pxsize*5, pxsize*5, pxsize*2, pxsize);
    fill(line2);
    square(pxsize*7, pxsize*6, pxsize);
    fill(line2);
}
//heartline3
{
    square(pxsize*8, pxsize*8, pxsize);
    fill(line3);
    square(pxsize*9, pxsize*7, pxsize);
    fill(line3);
    rect(pxsize*10, pxsize*6, pxsize*2,pxsize);
    fill(line3);
    square(pxsize*11,pxsize*7, pxsize);
    fill(line3);
    square(pxsize*10,pxsize*8, pxsize);
    fill(line3);
    square(pxsize*9,pxsize*9, pxsize);
    fill(line3);
    square(pxsize*8,pxsize*10, pxsize);
    fill(line3);
    square(pxsize*7,pxsize*9, pxsize);
    fill(line3);
    square(pxsize*6,pxsize*8, pxsize);
    fill(line3);
    rect(pxsize*5,pxsize*6, pxsize, pxsize*2);
    fill(line3);
    square(pxsize*6,pxsize*6, pxsize);
    fill(line3);
    square(pxsize*7,pxsize*7, pxsize);
    fill(line3);
}
//heartline4
{
    square(pxsize*8,pxsize*9, pxsize);
    fill(line4);
    square(pxsize*9,pxsize*8, pxsize);
    fill(line4);
    square(pxsize*10,pxsize*7, pxsize);
    fill(line4);
    square(pxsize*7,pxsize*8, pxsize);
    fill(line4);
    square(pxsize*6,pxsize*7, pxsize);
    fill(line4);
}
//star
{
    square (pxsize*10, pxsize*13, pxsize);
    fill(star1);
    square (pxsize*11, pxsize*15, pxsize);
    fill(star1);
    square (pxsize*11, pxsize*11, pxsize);
    fill (star1);
    square (pxsize*11, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*12, pxsize*14, pxsize);
    fill (star1);
    square (pxsize*12, pxsize*12, pxsize);
    fill (star1);
    square (pxsize*12, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*13, pxsize*16, pxsize);
    fill (star1);
    square (pxsize*13, pxsize*10, pxsize);
    fill (star1);
    rect (pxsize*13, pxsize*11, pxsize, pxsize*5);
    fill (star2);
    square (pxsize*14, pxsize*14, pxsize);
    fill(star1);
    square (pxsize*14, pxsize*12, pxsize);
    fill (star1);
    square (pxsize*14, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*15, pxsize*15, pxsize);
    fill (star1);
    square (pxsize*15, pxsize*11, pxsize);
    fill (star1);
    square (pxsize*15, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*16, pxsize*13, pxsize);
    fill (star1);
}
{
    square (pxsize*2, pxsize*2, pxsize);
    fill (star2);
    square (pxsize*3, pxsize*3, pxsize);
    fill (star2);
    square (pxsize*1, pxsize*3, pxsize);
    fill (star2);
    square (pxsize*2, pxsize*4, pxsize);
    fill (star2);
}

    if(pxsize < 8) {
        line1=[0,0,0]
        line2=[255,255,255]
        background[238,238,238]


}
    if(pxsize > 8 && pxsize < 11){
        line3= (245, 237, 237)
        line4= (245, 237, 237)
        star1= [254,255,210]
        star2= [245,231,178]

    }


}