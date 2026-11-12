const FEATURED = ["Starbucks Coffee","UNIQLO","Cinema XXI","Sephora","Nike","H&M","Haagen-Dazs","Krispy Kreme","Gramedia","Miniso","Samsung","Yoshinoya"];
let towerSel = "GF";

const sec = (eyebrow, title, body) =>
  "<div class='sec rvl'><div class='eyebrow'>" + eyebrow + "</div><h3 class='serif sech'>" + title + "</h3>" + body + "</div>";

const carousel = html =>
  "<div class='cwrap'><button class='carr l' data-act='carr' data-d='-1' aria-label='Previous'>&#8249;</button>" +
  "<div class='hscroll'>" + html + "</div>" +
  "<button class='carr r' data-act='carr' data-d='1' aria-label='Next'>&#8250;</button></div>";

function towerPanel(f) {
  const L = STORE_OBJ.filter(x => x.floor === f);
  const cs = Object.keys(CATS).map(c => [c, L.filter(x => x.cat === c).length]).filter(x => x[1]);
  const mx = Math.max(1, ...cs.map(x => x[1]));
  return "<div class='f-" + fcls(f) + "'><div class='fbig'>" + f + "</div><div><b>" + FLOOR_NAME[f] + "</b></div>" +
    "<div class='muted' style='margin-bottom:10px'>" + L.length + " stores</div>" +
    cs.map(([c, n]) => "<div class='hb'><span>" + catName(c) + "</span><span class='b' style='width:" + Math.round(n / mx * 100) + "%;background:var(--fc)'></span><b>" + n + "</b></div>").join("") +
    "<div class='acts'><button class='btn sm' data-act='dfloorview' data-f='" + f + "'>Show all " + L.length + "</button></div></div>";
}
