const top500 = [
  "https://google.com",
  "https://youtube.com",
  "https://reddit.com",
  "https://amazon.co.uk",
  "https://google.co.uk",
  "https://bbc.co.uk",
  "https://bongacams.com",
  "https://wikipedia.org",
  "https://twitch.tv",
  "https://yahoo.com",
  "https://live.com",
  "https://netflix.com",
  "https://facebook.com",
  "https://microsoftonline.com",
  "https://ebay.co.uk",
  "https://chaturbate.com",
  "https://ladbible.com",
  "https://www.gov.uk",
  "https://vk.com",
  "https://livejasmin.com",
  "https://pornhub.com",
  "https://zoom.us",
  "https://trustpilot.com",
  "https://fandom.com",
  "https://aparat.com",
  "https://rightmove.co.uk",
  "https://microsoft.com",
  "https://livein.care",
  "https://theguardian.com",
  "https://xhamster.com",
  "https://sportbible.com",
  "https://ok.ru",
  "https://imgur.com",
  "https://dailymail.co.uk",
  "https://roblox.com",
  "https://itv.com",
  "https://lloydsbank.co.uk",
  "https://redd.it",
  "https://unilad.co.uk",
  "https://bing.com",
  "https://msn.com",
  "https://virginmedia.com",
  "https://autotrader.co.uk",
  "https://amazon.com",
  "https://www.nhs.uk",
  "https://lloydsbank.com",
  "https://disneyplus.com",
  "https://instagram.com",
  "https://bt.com",
  "https://chess.com",
  "https://nationwide.co.uk",
  "https://office.com",
  "https://indeed.com",
  "https://booking.com",
  "https://gumtree.com",
  "https://hsbc.co.uk",
  "https://avito.ru",
  "https://skysports.com",
  "https://spankbang.com",
  "https://varzesh3.com",
  "https://t.co",
  "https://natwest.com",
  "https://sky.com",
  "https://digikala.com",
  "https://mail.ru",
  "https://hotukdeals.com",
  "https://xvideos.com",
  "https://skiddle.com",
  "https://aol.com",
  "https://runescape.wiki",
  "https://imdb.com",
  "https://zoopla.co.uk",
  "https://etsy.com",
  "https://asos.com",
  "https://santander.co.uk",
  "https://op.gg",
  "https://argos.co.uk",
  "https://barclays.co.uk",
  "https://tesco.com",
  "https://ikea.com",
  "https://deviantart.com",
  "https://tumblr.com",
  "https://bbc.com",
  "https://coinmarketcap.com",
  "https://national-lottery.co.uk",
  "https://royalmail.com",
  "https://just-eat.co.uk",
  "https://tripadvisor.co.uk",
  "https://spotify.com",
  "https://adobe.com",
  "https://uhi.ac.uk",
  "https://sxyprn.com",
  "https://google.ru",
  "https://etoro.com",
  "https://isams.cloud",
  "https://google.co.in",
  "https://u.gg",
  "https://telewebion.com",
  "https://4chan.org",
  "https://halifax-online.co.uk",
  "https://premierleague.com",
  "https://asda.com",
  "https://wowhead.com",
  "https://rarbgget.org",
  "https://savefrom.net",
  "https://sageone.com",
  "https://redgifs.com",
  "https://paypal.com",
  "https://independent.co.uk",
  "https://allegro.pl",
  "https://ucas.com",
  "https://avto.pro",
  "https://gladly.io",
  "https://yespornplease.sexy",
  "https://marksandspencer.com",
  "https://rutracker.org",
  "https://sainsburys.co.uk",
  "https://dropbox.com",
  "https://hltv.org",
  "https://currys.co.uk",
  "https://steamcommunity.com",
  "https://duckduckgo.com",
  "https://rokna.net",
  "https://ecosia.org",
  "https://yandex.ru",
  "https://killpls.me",
  "https://4channel.org",
  "https://noodlemagazine.com",
  "https://airbnb.co.uk",
  "https://google.com.ua",
  "https://test-for-coronavirus.service.gov.uk",
  "https://ficbook.net",
  "https://reverso.net",
  "https://wordpress.com",
  "https://onthemarket.com",
  "https://unrealengine.com",
  "https://namasha.com",
  "https://mirror.co.uk",
  "https://aseannow.com",
  "https://twitter.com",
  "https://freepik.com",
  "https://tyla.com",
  "https://filimo.com",
  "https://sinoptik.ua",
  "https://screwfix.com",
  "https://nih.gov",
  "https://rmunify.com",
  "https://johnlewis.com",
  "https://ultimate-guitar.com",
  "https://ljmu.ac.uk",
  "https://squirt.org",
  "https://artstation.com",
  "https://aliexpress.com",
  "https://tiktok.com",
  "https://picuki.com",
  "https://donya-e-eqtesad.com",
  "https://deliveroo.co.uk",
  "https://sage.com",
  "https://zoechip.com",
  "https://tsb.co.uk",
  "https://google.com.tr",
  "https://animepahe.com",
  "https://google.pl",
  "https://pickmypostcode.com",
  "https://talktalk.co.uk",
  "https://namnak.com",
  "https://aber.ac.uk",
  "https://rbs.co.uk",
  "https://patreon.com",
  "https://channel4.com",
  "https://apple.com",
  "https://amazonaws.com",
  "https://shutterstock.com",
  "https://myshopify.com",
  "https://wayfair.co.uk",
  "https://rspca-preston.org.uk",
  "https://gla.ac.uk",
  "https://totalsportek.com",
  "https://veporno.net",
  "https://thetrainline.com",
  "https://aol.co.uk",
  "https://next.co.uk",
  "https://express.co.uk",
  "https://animeforce.it",
  "https://service-now.com",
  "https://halfords.com",
  "https://patientaccess.com",
  "https://rology.net",
  "https://cdkeys.com",
  "https://gismeteo.ru",
  "https://wetransfer.com",
  "https://company-information.service.gov.uk",
  "https://overclockers.co.uk",
  "https://youtubetomp3music.com",
  "https://loveplanet.ru",
  "https://texthelp.com",
  "https://onlyfans.com",
  "https://e-hentai.org",
  "https://canva.com",
  "https://bankofscotland.co.uk",
  "https://tax.service.gov.uk",
  "https://1337x.to",
  "https://humblebundle.com",
  "https://autoweboffice.ru",
  "https://g2a.com",
  "https://unblockit.ch",
  "https://xnxx.com",
  "https://ea.com",
  "https://hm.com",
  "https://rambler.ru",
  "https://livejournal.com",
  "https://ninisite.com",
  "https://windowsazure.com",
  "https://siska.tv",
  "https://imagefap.com",
  "https://metoffice.gov.uk",
  "https://tandfonline.com",
  "https://travelerdoor.com",
  "https://pearsonactivelearn.com",
  "https://goodreads.com",
  "https://odir.org",
  "https://rspca.org.uk",
  "https://speedtest.net",
  "https://roll20.net",
  "https://ukr.net",
  "https://wix.com",
  "https://lolchess.gg",
  "https://bohemia.net",
  "https://hw.ac.uk",
  "https://zakupki.gov.ru",
  "https://hesgoal.com",
  "https://spkostroma.ru",
  "https://eghtesadnews.com",
  "https://skyscanner.net",
  "https://manyvids.com",
  "https://archive.org",
  "https://exporntoons.net",
  "https://sqa.org.uk",
  "https://perfectmoney.com",
  "https://lenta.ru",
  "https://data.gov.uk",
  "https://lamoda.ru",
  "https://sberbank.ru",
  "https://studentlearningportal.net",
  "https://discordapp.com",
  "https://whatsapp.com",
  "https://planetradio.co.uk",
  "https://dndbeyond.com",
  "https://ilovepdf.com",
  "https://ryanair.com",
  "https://linkedin.com",
  "https://dailyrecord.co.uk",
  "https://activeteachonline.com",
  "https://schoolpost.co.uk",
  "https://utorrent.com",
  "https://quizlet.com",
  "https://fetlife.com",
  "https://funnyjunk.com",
  "https://tejaratnews.com",
  "https://diply.com",
  "https://moviesjoy.to",
  "https://comparethemarket.com",
  "https://omgwtfnzbs.me",
  "https://myjobscotland.gov.uk",
  "https://healthline.com",
  "https://adsco.re",
  "https://tvchaosuk.com",
  "https://mangasee123.com",
  "https://betfair.com",
  "https://radiopaedia.org",
  "https://motorsport.com",
  "https://ebay.com",
  "https://boots.com",
  "https://daftsex.com",
  "https://telegraph.co.uk",
  "https://cnn.com",
  "https://espncricinfo.com",
  "https://rarbg.to",
  "https://skipvideoads.com",
  "https://civilservicejobs.service.gov.uk",
  "https://ixxx.com",
  "https://fdating.com",
  "https://runescape.com",
  "https://fano.in",
  "https://rus24.tv",
  "https://zooqle.com",
  "https://trac.jobs",
  "https://wegotthiscovered.com",
  "https://jobtiles.com",
  "https://diy.com",
  "https://jdsports.co.uk",
  "https://pirate-proxy.app",
  "https://dailymotion.com",
  "https://intuit.com",
  "https://gogoanime.pe",
  "https://very.co.uk",
  "https://roboform.com",
  "https://samsung.com",
  "https://sportsmole.co.uk",
  "https://telegram.org",
  "https://youm7.com",
  "https://ozon.ru",
  "https://icy-veins.com",
  "https://privatbank.ua",
  "https://f1news.ru",
  "https://confused.com",
  "https://gamingbible.co.uk",
  "https://readcomiconline.li",
  "https://eatthis.com",
  "https://archiveofourown.org",
  "https://repubblica.it",
  "https://vivastreet.co.uk",
  "https://ee.co.uk",
  "https://saednews.com",
  "https://olx.pl",
  "https://universal-credit.service.gov.uk",
  "https://myfreecams.com",
  "https://strava.com",
  "https://javcl.com",
  "https://privat24.ua",
  "https://hsbc.uk",
  "https://tv-vault.me",
  "https://myhermes.co.uk",
  "https://javthe.com",
  "https://nexusmods.com",
  "https://dominos.co.uk",
  "https://theforum365.com",
  "https://txxx.com",
  "https://thisvid.com",
  "https://googlevideo.com",
  "https://fotostrana.ru",
  "https://tui.co.uk",
  "https://thepiratebay.org",
  "https://cheriesplace.me.uk",
  "https://britishairways.com",
  "https://cambridge.org",
  "https://totaljobs.com",
  "https://adme.ru",
  "https://mangadex.org",
  "https://lactalis.co.uk",
  "https://ons.gov.uk",
  "https://egress.com",
  "https://corbettmaths.com",
  "https://jashautchord.com",
  "https://lolesports.com",
  "https://apply-to-visit-or-stay-in-the-uk.homeoffice.gov.uk",
  "https://animeseries.io",
  "https://fragrantica.com",
  "https://bitcoinity.org",
  "https://waitrose.com",
  "https://norton.com",
  "https://mymail.co.uk",
  "https://swansea.ac.uk",
  "https://liveonscore.tv",
  "https://parentpay.com",
  "https://mrporter.com",
  "https://parcel2go.com",
  "https://streamwo.com",
  "https://behance.net",
  "https://primelocation.com",
  "https://discord.com",
  "https://chipworks.co.uk",
  "https://flypgs.com",
  "https://moneysavingexpert.com",
  "https://tableau.com",
  "https://4porn.com",
  "https://original-carparts.com",
  "https://reed.co.uk",
  "https://reminews.com",
  "https://flickr.com",
  "https://soundcloud.com",
  "https://thesun.co.uk",
  "https://pixiv.net",
  "https://tal.net",
  "https://huyamba.info",
  "https://vanishingincmagic.com",
  "https://tinyurl.is",
  "https://github.com",
  "https://stackexchange.com",
  "https://senturion.to",
  "https://plex.tv",
  "https://myschoolportal.co.uk",
  "https://newsnow.co.uk",
  "https://ao.com",
  "https://stackoverflow.com",
  "https://agacelebir.com",
  "https://vanguardinvestor.co.uk",
  "https://tkmaxx.com",
  "https://tfl.gov.uk",
  "https://mymailaccount.co.uk",
  "https://cgleague.co.uk",
  "https://last.fm",
  "https://fnz.net",
  "https://instructure.com",
  "https://ria.ru",
  "https://tradingview.com",
  "https://anther-moss.myshopify.com",
  "https://pornzog.com",
  "https://streamtape.com",
  "https://eventbrite.co.uk",
  "https://wildberries.ru",
  "https://mangahelpers.com",
  "https://project123movies.com",
  "https://brazzers.com",
  "https://itch.io",
  "https://hegartymaths.com",
  "https://webex.com",
  "https://dawn.com",
  "https://palletways.com",
  "https://porn00.org",
  "https://newtab.page",
  "https://xfantazy.com",
  "https://famousmales.com",
  "https://thingiverse.com",
  "https://dialog-regions.ru",
  "https://worthpoint.com",
  "https://kumb.com",
  "https://ign.com",
  "https://eghtesadonline.com",
  "https://weather.com",
  "https://rule34.xxx",
  "https://kraken.com",
  "https://sciencedirect.com",
  "https://bmovies.co",
  "https://sbrf.ru",
  "https://login.nhs.uk",
  "https://officialcharts.com",
  "https://altimate.co.uk",
  "https://tes.com",
  "https://wise.com",
  "https://pearson.com",
  "https://animedao.to",
  "https://xtendamix.com",
  "https://barclaycard.co.uk",
  "https://manoramaonline.com",
  "https://rp5.ua",
  "https://transfermarkt.co.uk",
  "https://9anime.to",
  "https://researchgate.net",
  "https://ups.com",
  "https://biblehub.com",
  "https://b-ok.cc",
  "https://force.com",
  "https://diary.ru",
  "https://gayboystube.com",
  "https://dpreview.com",
  "https://youporn.com",
  "https://raidbots.com",
  "https://diagnosticquestions.com",
  "https://fashionbeans.com",
  "https://ghanaweb.com",
  "https://yjc.news",
  "https://4cdn.org",
  "https://nvidia.com",
  "https://live.net",
  "https://delivery-club.ru",
  "https://wickes.co.uk",
  "https://alibaba.com",
  "https://bistudio.com",
  "https://summerreadingchallenge.org.uk",
  "https://opodo.co.uk",
  "https://eonnext.com",
  "https://halifax.co.uk",
  "https://open.ac.uk",
  "https://pcgamer.com",
  "https://thesaurus.com",
  "https://johnpyeauctions.co.uk",
  "https://parsfootball.com",
  "https://f1-world.ru",
  "https://electricunicycle.org",
  "https://dailystar.co.uk",
  "https://leagueoflegends.com",
  "https://giffgaff.com",
  "https://thread.com",
  "https://ig.com",
  "https://shein.co.uk",
  "https://fanfiction.net",
  "https://elvenar.com",
  "https://discogs.com",
  "https://wavesducks.com",
  "https://nyaa.si",
  "https://hot-sex-tube.com",
  "https://furaffinity.net",
  "https://topcashback.co.uk",
  "https://caterer.com",
  "https://moneyfarm.com",
  "https://pikabu.ru",
  "https://theoldreader.com",
  "https://mobafire.com",
  "https://soccerstreams.net",
  "https://rottentomatoes.com",
  "https://nairaland.com",
  "https://123moviess.sc",
  "https://proxybay.github.io",
  "https://bet365.com",
  "https://ilfattoquotidiano.it",
  "https://deepl.com",
  "https://xda-developers.com",
  "https://javbangers.com",
  "https://mamotatopokazmi.pl"
];

export default top500;