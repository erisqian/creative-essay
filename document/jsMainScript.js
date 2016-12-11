var numPicIndex = -1;
var numCurStatus = -1;
var strImgTips = [
    "This is a promotion picture I modeled for the NMNH. It well represents my personality as a truth-seeker, and it's cool to have the image of myself shown around Washington DC!",
    "My debut in the Chinese filmmaking world, being granted the Excellence Award by Peter Newman at FIRST International Film Festival. Peter wasn't wearing his shoes (as always).",
    "I was honored to a speak at TEDx Shanghai Maritime University, sharing how I've become a growth mindset person through years of travelling and filmmaking.",
    "Shooting a short documentary in Tibet, I joined the local kids for their traditional dance. Seriously, dancing at a 15,000-feet-high altitude was literally breath-taking!",
    "As a director, I sometimes operate the camera too. Female filmmakers are very few no matter in China or in America, and I hope I could break the stereotype by working hard.",
    "Not only do films need directors, but sometimes photography also needs to be directed. This is a group portrait of an internationally-renowned band, Hanggai. Directing 7 big Mongolian men was a little nerve-wracking, but the result was really fulfilling and was collected in their new album!",
    "The great team of the Smithsonian Science How? webcast series. The team won a National Outreach Award, and I'm proud to have been one of them.",
    "I've always been in love with nature. I once joined a scientist's research on sharks in South Carolina; the shark was measured and later released back to the water. ",
    "As one of the founding members of WUVAonline video team, I created a talkshow Talk To My Professor which is carried on even after I graduated. My filmmaking career started from making news videos at UVa.",
    "Steve Irwin inpired me to become a documentary filmmaker, and I was lucky to meet his daughter Bindi Irwin at their family zoo. She's a really nice angel!",
    "Appreciating the beauty and history of the Blue Mosque. Later I magically made friends with the Director of Blue Mosque Foundation, and joined his family breakfast party (it was during Ramadan).",
    "A Chinese family in the 90s! The one on the left corner is me at 3 years old. Who would have thought that this little girl would travel so far and dedicate her life to creating films?"
];

function funLoad() {

    funChangeImg(0);

}


function funImgMoved(event) {

    switch (numPicIndex) {
        case 0:
            if (event.offsetX > 350) {
                funChangeCursor(2);
                document.getElementById('idImgBox').title = "next photo";

            } else {
                funChangeCursor(0);
            }
            break;
        case 11:
            if (event.offsetX > 350) {
                funChangeCursor(0);

            } else {
                document.getElementById('idImgBox').title = "next photo";
                funChangeCursor(1);
            }
            break;
        default:
            if (event.offsetX > 350) {
                funChangeCursor(2);
                document.getElementById('idImgBox').title = "next photo";
            } else {
                funChangeCursor(1);
                document.getElementById('idImgBox').title = "previous photo";
            }
    }
}


function funImgClicked() {
    var numImgTemp = numPicIndex;
    if (numPicIndex > 0 && numPicIndex <= 11 && numCurStatus == 1) {
        --numImgTemp;
    } else if (numPicIndex >= 0 && numPicIndex < 11 && numCurStatus == 2) {
        ++numImgTemp;
    }
    funChangeImg(numImgTemp);
}


function funMsOver() {
    document.getElementById('idTips').innerHTML = strImgTips[numPicIndex];
}


function funMsOut() {

    document.getElementById('idTips').innerHTML = "";

}



function funChangeCursor(Status) {
    if (numCurStatus != Status) {
        numCurStatus = Status;

        switch (numCurStatus) {
            case 0:
                document.getElementById('idImgBox').style.cursor = "auto";
                document.getElementById('idImgBox').title = "";
                break;
            case 1:
                document.getElementById('idImgBox').style.cursor = "url('document/curArrow_1.cur'),auto";
                document.getElementById('idImgBox').title = "向前翻页提示";
                break;
            case 2:
                document.getElementById('idImgBox').style.cursor = "url('document/curArrow_2.cur'),auto";
                document.getElementById('idImgBox').title = "向后翻页提示";
        }
    }
}




function funChangeImg(Index)

{

    if (numPicIndex != Index) {
        numPicIndex = Index;
        document.getElementById('idImgBox').style.backgroundImage = "url('document/picApplication_" + numPicIndex + ".jpg')";
        document.getElementById('idTips').innerHTML = strImgTips[numPicIndex];

    }

}
