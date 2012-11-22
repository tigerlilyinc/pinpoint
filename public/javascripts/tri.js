SEGMENT_SIZE = 200;
VERTEX_MOVE = 200;
VERTEX_WIGGLE = 10;

function sketchProc(processing) {
  processing.setup = function() {
    processing.background(255);
    processing.size(window.innerWidth, window.innerHeight);
    window.point_a = [
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.width/2,
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.height/2
    ];
    window.point_b = [
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.width/2,
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.height/2
    ];
    window.point_c = [
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.width/2,
      processing.random(-SEGMENT_SIZE, SEGMENT_SIZE) + processing.height/2
    ];
    window.last_point = window.point_c.slice(0);
    window.last_point_i = "C";
    window.tcolor = toxi.color.TColor.newHSV(218, 0.571, 0.933);
  };
  processing.draw = function() {
    if (processing.frameCount % 60 == 0) {
      processing.stroke(255);
      processing.fill(255, 255, 255, 10);
      processing.rect(0, 0, processing.width, processing.height);
    }

    if (window.last_point_i == "C") {
      window.next_point = window.point_a.slice(0);
      window.next_point_ref = window.point_a;
      window.last_point_i = "A";
    } else if (window.last_point_i == "A") {
      window.next_point = window.point_b.slice(0);
      window.next_point_ref = window.point_b;
      window.last_point_i = "B";
    } else {
      window.next_point = window.point_c.slice(0);
      window.next_point_ref = window.point_c;
      window.last_point_i = "C";
    }

    var distance;
    if (Math.round(processing.random(1, 20)) == 5) {
      distance = VERTEX_MOVE;
      window.next_point[0] = window.next_point[0] + processing.random(-distance, distance);
      if (window.next_point[0] < 0) {
        window.next_point[0] = 0;
      } else if (window.next_point[0] > processing.width) {
        window.next_point[0] = processing.width;
      }
      window.next_point[1] = window.next_point[1] + processing.random(-distance, distance);
      if (window.next_point[1] < 0) {
        window.next_point[1] = 0;
      } else if (window.next_point[1] > processing.height) {
        window.next_point[1] = processing.height;
      }
      window.next_point_ref[0] = window.next_point[0];
      window.next_point_ref[1] = window.next_point[1];
    } else {
      distance = VERTEX_WIGGLE;
      window.next_point[0] = window.next_point[0] + processing.random(-distance, distance);
      if (window.next_point[0] < 0) {
        window.next_point[0] = 0;
      } else if (window.next_point[0] > processing.width) {
        window.next_point[0] = processing.width;
      }
      window.next_point[1] = window.next_point[1] + processing.random(-distance, distance);
      if (window.next_point[1] < 0) {
        window.next_point[1] = 0;
      } else if (window.next_point[1] > processing.height) {
        window.next_point[1] = processing.height;
      }
    }

    window.tcolor = window.tcolor.rotateRYB(1);
    var rgb = window.tcolor.rgb;
    processing.stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255, 20);
    processing.line(window.last_point[0], window.last_point[1], window.next_point[0], window.next_point[1]);

    window.last_point = window.next_point;
  };
}

var canvas = document.getElementById("triCanvas");
var p = new Processing(canvas, sketchProc);

