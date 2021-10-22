function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#dde007')
}

function modelLoaded()
{
    console.log('PoseNet is initiallized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}