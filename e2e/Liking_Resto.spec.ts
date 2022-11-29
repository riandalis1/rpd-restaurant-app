Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked Resto', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto then unlike and check empty liked Resto again', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('#resto-link');
  I.click(locate('#resto-link').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restaurants');

  I.seeElement('#resto-link');
  I.click(locate('#resto-link').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restaurants');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});
