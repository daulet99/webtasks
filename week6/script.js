function make_done(event) {
    n = event.target.parentNode;
    //n.dataStatus = 'done';
    n.setAttribute('data-status','done')
    console.log(n);
}
const btn = document.querySelectorAll('button');
for (const i of btn) {
    i.addEventListener('click', make_done);
}