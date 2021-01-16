let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote =
[
'Never interrut youe enemy when he is making a mistake.',
'Success is not final, Failure is not fatal; it is the courage to continue tha counts...',
'Dont wait for the perfect moment take the moment and make it perfect.',
'Dont be afraid of losing people. Be afraid of losing yourself by trying to please everyone around you.',
'Every mans life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another.',
'When you get what you want, that`s god`s direction. But when you don`t get what you want, that`s gods protection.',
'It`s easy to look sharp when you havn`t done any work.',
'Sometimes it`s better to just remain silent and smile.',
'I have never advocated war except as a means of peace.',
'Ours is a world of nuclear giants and ethical infants. We know more about war than we know about peace, more about killing than we know about living.',
'The best advertising is done by satisfied customer.',
'If you don`t receive the same efforts you give, lose that contact.',
'Leave the dead to the dead.',
'Dont lose the spark that makes you....You !!!',
'I no longer force things. What flows, flows. What crashes, crashes. I only have space and energy for things that are meant for me.',
'It`s not the good Byes hurts, is the flashback that follows.....',
'Don`t expect to get what you give. Not everyone has a heart like you.',
'Your limitation - It`s only your imagination.',
'If you want to be trusted, Be honest.',
'Emotionas doesn`t make you weak, emotions make you human.',
'A wise man once said nothing.',
'I will ignore you so hard, you will start to doubt your own existence.',
'I know it`s tough but please don`t give up.',
'Always ask yourself if what you`re doing today is getting you closer to where you want to be tomorrow.',
'When we fall for someone without them knowing. That`s the time logic is no longer valid.',
'Impossible just means you haven`t found a solution yet.',
'Money is not everything. Make sure you earn a lot before speaking such nonsense.',
'It`s time for you to start taking the neccessary steps to become that version of yourself that you can`t stop dreaming about',
'Accept what is. Let go of what was. And have faith in what will be.',
'Everything is temporary,dont get too attached. Just flow with the moment and be happy'
];

btn.addEventListener('click',function(){
        var randomQuote = quote[Math.floor(Math.random()*quote.length)]
        output.innerHTML = "`` " + randomQuote + " ``";
});
