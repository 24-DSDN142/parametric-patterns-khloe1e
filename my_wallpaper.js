//your parameter variables go here!
var canvasX = 200;
var canvasY = 200;
var pxsize = 12.5;
var line1 = [255,215,223] 
var line2 = [254,198,212] 
var line3 = [254,175,197] 
var line4 = [254,154,182]
var star1 = [243,204,243]
var star2 = [155,134,189]
//(255, 215, 223) lightest pink
//(254,198, 212) 
//(254, 175, 197) 
//(254, 154, 182) rasberry pink

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = canvasX;
  pWallpaper.grid_settings.cell_height = canvasY;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
    background(245, 237, 237);
    noStroke();

}

//draw this function loops, the code within read throught repetedly while running
function my_symbol(){
    square(pxsize*8, pxsize*6, pxsize);
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

//heart line 2
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

//heartline3
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
//heartline4
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

//star
    square (pxsize*10, pxsize13, pxsize);
    fill(star1);
    square (pxsize*11, pxsize*15, pxsize);
    fill(star1);
    square (pxsize*11, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*11, pxsize*11, pxsize);
    fill (star1);
    square (pxsize*12, pxsize*14, pxsize);
    fill (star1);
    square (pxsize*12, pxsize*13, pxsize);
    fill (star2);
    square (pxsize*12, pxsize*12, pxsize);
    fill (star1);
    


}