<!DOCTYPE html>
<canvas id='canvas' width='400' height='400'
    style='background-color:#00AA90'></canvas>

<script>
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = canvas.height/2;
var Tstr = <?php echo $Tstr; ?>;
var Tend = <?php echo $Tend; ?>;
//Tstr = 120;
//Tend = 194;

ctx.translate(radius, radius);
radius *= 0.9;
drawClock();

function drawClock() {
//Ring
    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, Math.PI*2)
    ctx.fillStyle = '#FFC408'
    ctx.fill()

//Face
    ctx.beginPath()
    ctx.arc(0, 0, radius*0.9, 0, Math.PI*2)
    ctx.fillStyle = '#D9AB42'
    ctx.fill()

//Drawtime
    Tstr += 60
    Tend += 60
    ctx.beginPath()
    ctx.translate(0,0);
    ctx.moveTo(0,0)
    ctx.arc(0, 0, radius*0.6, Math.PI*2*Tstr/120, Math.PI*2*Tend/120)
    ctx.closePath()
    ctx.fillStyle = '#86C166'
    ctx.fill()

//Dot
    ctx.beginPath()
    ctx.arc(0, 0, radius*0.1, 0, Math.PI*2)
    ctx.fillStyle = '#FFFFFB'
    ctx.fill()

    var ang
    var num
    ctx.font = radius*0.2 + 'px arial'
    ctx.textBaseline= 'middle'
    ctx.textAlign = 'center'
    for(num=1; num<13; num++) {
        ang = num*Math.PI/6
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.75)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, radius*0.75)
        ctx.rotate(-ang)
    }
}
</script>
</html>
