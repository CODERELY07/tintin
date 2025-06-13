
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../components/Header";
// import TextReader from "../components/TextReader";
const galleryImages = [
  {
    src: "./img/alamat-ng-boa.jpg",
    category: "Alamat ng Boa",
    description: [
      'Noong unang panahon may isang alamat na nag mula sa bayan ng Nabua, Sinusubaybayan ng bayan ng Nabua ang makasaysayang pinagmulan ng pangalan nito noong panahon ng Kolonisasyon ng mga Espanyol. Isang Augustinian Friar na nagngangalang Fray Alfonzo Gimenez ang nakarating sa isa sa mga nayo na tinatawag na Lupa na noon ay nasa ilalim ng Datu Panga mula sa Borneo. Natagpuan ng butihing prayle ang mga tao sa loob ng nasabing nayon na naghihiwa ng niyog. Inalok siyang makibahagi na ang niyog na tinawag ng mga katutubo na "BOA". Kaagad, binanggit ng mabuting prayle Fray Alfonzo Gimenez ang lugar bilang "NABUA" na binibigkas sa kanyang Spanish Accent.',

      'Mula noon, ang lugar ng Nabua ay naging sikat na kilala bilang Nabua. Isang mananalaysay na nagngangalang Fray Felix Huerta na ang pangalan ay nagmula sa kuwento na ang orihinal na sitio ng bayan ay nasa hugis ng "BOA", batang embryo ng niyog na napaliligiran ng limang (5) nayon na pinangalanang Lupa, Antacodos, Sabang, Caobnon at Binoyoan. Ang iba ay naniniwala kung hindi man at sinabing ito ay nasa gitnang bahagi ng nasabing nayon kaya malapit na kahawig ng isang masarap na "BOA" na gustong kainin ng mga bata. Simula noon, ang bayan ay tinawag na "NABOBOWA" ngunit ang mga taon ng mahabang paggamit ay pinaikli at pinasama ito sa kasalukuyang pangalan ng NABUA. SI Cuaderno isang munisipalidad ng Nabua, nang simulan ng isang prayle na si Fray Alfonzo Gimenez na isang misyonerong Augustinian, ang kanyang unang misyon sa Simbahan sa paninirahan na kilala noon bilang Lupa. Ang makasaysayang simbahan na matatagpuan ay isang nagpapahiwatig na itinatag makalipas ang pitong taon mula sa petsa na ito ay itinatag ni Fr. Gimenez.',

      `Noong 1578, isang grupo ng mga misyonerong pransiskano na pinamumunuan nina Fray Pablo de Jesus at Fray Bartolome Ruiz ang nagtayo ng isang simbahan sa isang lugar na kilala bilang Antacodos at doon sila naglagay ng malaking krus. Hindi nagtagal, pinagsama ng mga misyonerong ito ang mga nayon ng Lupa, Antacodos, Sabang at Binoyoan at naging isang lugar na sa kasalukuyan ay kilala bilang bayan ng Nabua. Ang pangalang "Nabua" ay orihinal na mas mahaba na binabaybay bilang "Naboboa" na nakuha mula sa salitang "boa" na isang batang embryo ng niyog. Pinangalanan ang lugar na ito dahil sa ang katunayan na bago a orihinal na sitio ay hugis tulad ng isang 'boa'" Ito marahil ang angkop na paglalarawan ng lugar sa panahong iyon, at hanggang sa kasalukuyan, isang patag na kalupaan na umaabot mula sa baybayin ng mga lawa ng Bato at Baao at matatagpuan sa kapatagan sa pagitan ng Bundok Asog at ng kabundukan ng Bula at ng Pantao noon.`,

      `Kaya't simula noon ay ipinagdiriwang na ng Nabua ang pyesta nito na sikat na taunang Boa-Boahan festival sa ikatlo ng Mayo. Ang pinakatampok sa pagdiriwang ay ang reenactment ng tradisyunal na "Boa Feast", na ginigawang ritwal noong ika-13 na siglo kung saan ang mga sinaunang Bicolano na nag-alay ng mga tanikala ng coconut embryo na tinatawag na 'Boa' sa kanilang mga paganong diyos, sa paniniwalang ito ay magbibigay sa kanila ng sapat na ani, Magandang panahon, at gaagwing mas masagana at masaya ang kanilang buhay sa buong taon.`
    ]
  },
  {
    src: "./img/batong-sagrado.jpg",
    category: "Alamat ng Sagrado",
    description:[
      'Noong unang panahon, ang bayan ng Bato ay napapalibutan ng isang lawa na pinaniniwalaang may hiwaga. Sa gitna ng lawa ay may isang malaking bato na nakalubog tuwing tag-ulan at sumisilip tuwing tag-init. Ang batong ito ang tinatawag ng mga matatanda na Batong Sagrado sapagkat dito daw sumasamba noon ang mga ninuno upang humingi ng masaganang ani at huli ng isda.',

      'Sa bayang ito, may isang binatang bangkero na ang pangalan ay Ricardo. Kilala siya sa kanyang kasipagan at kagalingan sa pangingisda. Ngunit dahil sa kanyang likas na pagiging maabilidad, madalas ay nag-iisa siya sa laot at bihira siyang tumulong sa iba. Kaya’t madalas, kakaunti lamang ang kanyang huli kumpara sa mga mangingisdang nagtutulungan.  Isang araw, dumating ang isang matinding tagtuyot. Nawala ang mga isda, natuyo ang mga palayan, at humina ang kabuhayan ng mga tao. Nagpasiya si Ricardo na lumapit sa Batong Sagrado upang humingi ng tulong.',


      'Habang nakaluhod siya, biglang lumitaw mula sa bato ang isang matandang anyo ng diwata na may mahahabang puting buhok at isang baston na yari sa kawayan. Siya si Diwata Bunga, ang tagapangalaga ng lawa. “Ano ang kailangan mo, anak?” tanong ng diwata. Humingi si Ricardo ng tulong upang dumami ang mga isda at muling umunlad ang kanilang bayan. Ngunit ngumiti lamang si Diwata Bunga at tumugon: “Hindi mo kailangang mag-isa. Ang tunay na kasaganaan ay hindi para sa sarili lamang kundi para sa lahat. Buksan mo ang iyong puso sa pagtutulungan.”',

      'Naguluhan si Ricardo, ngunit nagpasya siyang subukan ang payo ng diwata. Kinaumagahan, pinuntahan niya ang iba pang mga bangkero at inimbitahan silang magtulong-tulungan sa pangingisda. Tinulungan niya ang mga matatanda, tinuruan ang mga bata, at nagtulungan silang lahat upang muling mapuno ng isda ang kanilang mga lambat.',

      'At sa kanilang pagkakaisa, biglang lumiwanag ang Batong Sagrado at bumuhos ang ulan sa lawa. Dumami ang mga isda, at muling naging masagana ang bayan. Mula noon, itinuring ng mga tao ang Bato na Batong Sagrado bilang simbolo ng pagkakaisa at pagtutulungan. Pinaniniwalaan nilang hangga’t nagtutulungan sila, patuloy silang pagpapalain ng lawa at ng kanilang bayan.'
    ]
  },
  {
    src: "./img/alamat-ng-bula.jpg",
    category: "Alamat ng Bula",
    description:[
      'Noong Unang Panahon, may isang maliit na pulo na tinatawag na Bula, bahagi ng Camarines Sur. Ayon sa Alamat, ang pangalan ay nagmula sa salitang "Bula" na ibig sabihin ay malambing na hangin na tumatama sa puno ng kawayan o sapa na umaagos. Isang mangingisda na batang nagngangalang Lando, tuwing umaga siya ay pumapalaot sa dagat upang manghuli ng isda para sa kanilang kabuhayan. Isang araw, habang naglalayag siya sa malayo ay nakatanaw siya ng isang maliit na sapa na dumadaloy sa gitna ng dagat. Ang sapa ay may kakaibang kinang at naglalaman ng malamig na hangin na nagpapakalma sa bawat isip ng hangin dito.',

      `Habang papalapit si Lando sa sapa, isang babae ang nagpakita sa kanya tinanong ito ni Lando “bakit narito ka sa liblib na lugar?” At ikaw lamang bang mag-isa ang narito? Ngunit biglang sinabi ni Lando “sabagay sinong hindi maaliw sa napakagandang lugar na ito at subrang payapa ng lugar.” Ang hindi alam ni Lando ito pala ay isang diwata. Nagulat si Lando ng bigla itong magbago ng anyo na isang napakagandang babae na mahaba ang buhok at kumikinang ang kagandahan. Biglang natulala si Lando sa kanyang nasaksihan at dali-dali siyang nagsagwan ng kanyang bangka .Ngunit bigla sinabi ng diwata kay Lando “huwag kang matakot hindi ako masama at isa akong diwata na taga pangalaga ng liblib na lugar na ito halika lumapit ka sa akin at ika’y aking kuwentuhan tungkol sa liblib na lugar na ito.” At nagkuwento ang diwata kay Lando “ako ang diwata ng hangin ako ang nagbibigay buhay sa liblib na lugar na ito ako rin ang nagsisilbing buhay ng umaagos na sapa at saakin nanggagaling ang biyayang inyong natatanggap sa kabilang pulo. Kung kayo'y magpapakita ng kabutihan at malasakit sa
      kalikasan at makuntento lamang kayo sa binibigay kung biyaya ay patuloy ko kayong bibigyan ng marami pang biyaya. Kaya't tawagin niyo ang inyong pulo na BULA, dahil ang ibig sabihin nito ay isang malambing na hangin na tumatama sa mga dahon ng kawayan at nagmumula sa agos ng sapa.” 
      `,

      `Ipinaliwanag ng diwata ang lahat ng natatanggap nilang biyaya di namalayan ni Lando na palubog na pala ang araw nang bigla niyang naalala na wala pa pala siyang nahuhuling isda kaya't dali dali itong napatayo sa kadahilanang wala pa silang pang ulam. Biglang naglaho ang diwata nang magpapaalam na sana si Lando. Kaya't bilang pasasalamat sa diwata, nag-alay si lando ng isang maliit na kawayan bilang simbolo ng kanyang pasasalamat sa diwata. At mula noon tinawag na itong "BULA" dahil sa inalay ni Lando na isang maliit na pirasong kawayan at dahil din sa pangangalaga sa kalikasan at sapa na nagbibigay sa kanila ng biyaya. Hanggang ngayon naniniwala ang mga taga-Bula na ang kanilang lugar ay sagrado at puno ng biyaya dahil sa mahiwagang sapa na puno ng kawayan na nakapalibot sa sapa at dahil rin sa diwata na nagbabantay dito. Ang hangin na dumadaloy sa kanilang pulo ay patunayan  na ang kabutihan at pagmamahal sa kalikasan ang nagbibigay ng tunay na yaman.`
    ]
  },
  {
    src: "./img/alamat-ng-naka-buhi.jpg",
    category: "Alamat ng Buhi",
    description:[
      `Noong unang panahon, sa paanan ng Bulkang Mayon, nanirahan ang masaganang pamayanan ng mga Albayano. Ngunit isang araw, nagalit ang diwata ng bulkan na si Mayon sa kasakiman ng mga tao. Bumuga siya ng apoy, abo, at lava at nilamon ng kanyang poot ang mga bayan sa paligid. Mula sa kaguluhan, dalawang magkapatid ang nakaligtas, si Datu Amando at si Bino.`,

      `Habang naghahanap ng tubig, hinarap nila ang isang dambuhalang ahas sa bukal ng Lignion. Sa tulong ng kanilang tapang at talino, napaslang nila ito at nakapagtuloy sa paglalakbay. Sa gubat ng Riquit, nakasalubong nila ang ibang mga nakatakas at pinamunuan nila ang karaban papunta sa mas ligtas na lugar. Habang naglalakbay, marami silang nilampasang sapa, bundok, at gubat hanggang marating nila ang baybayin ng isang mahiwagang lawa. Napakaganda ng tanawin, may malamig na hangin at matabang lupa. Sabi ni Datu Amando, "Ito ang bagong simula. Isang 'maray na raga' mabuting lupa."`,

      `Doon sila nanirahan, nagtanim, at bumuo ng panibagong pamayanan. Ngunit dahil sa pagdami ng tao, ang ilan ay tumawid sa kabilang panig ng ilog at nagtayo ng bagong baryo. Minsan, may dumating na manlalakbay at tinanong sila “sino kayo? Anong lugar ito?” ang sagot nila “kami po ay mga ‘nakabuhi,’ kami’y mga nakaligtas.” At mula noon, ang lugar ay tinawag na Buhi tanda ng katatagan, pag-asa, at muling pagkabuhay ng isang bayan.`
    ]
  },
  {
    src: "./img/alamat-ng-siramag.jpg",
    category: "Alamat ng Siramag",
    description:[
      `Noong unang panahon, bago pa man dumating ang mga dayuhan sa lupaing tinatawag ngayong Camarines Sur, may isang mahiwagang lugar sa paanan ng kabundukan at gilid ng dagat. Ito ang Siramag, isang paraisong hitik sa kagandahan. Ang mga punong-kahoy ay singtaas ng ulap, ang tubig mula sa batis ay singlinaw ng kristal, at ang mga hayop ay malayang namumuhay sa kagubatan. Ngunit sa likod ng kagandahan ng Siramag, may isang diwatang tagapangalaga na siyang dahilan kung bakit nananatili itong malinis at payapa, siya ay si Sirang Alamag.`,

      `Si Sirang Alamag ay hindi basta-basta. Siya ay diwata ng hangin at kagubatan, may anyong tao ngunit may kapangyarihang higit pa sa sinuman. Hindi siya nakikita ng karaniwang tao, ngunit nararamdaman ang kanyang presensya sa paggalaw ng dahon, sa huni ng ibon, at sa malamig na simoy ng gabi. Siya ay mapagbigay sa mga taong may malasakit, ngunit mabangis sa mga mapanira at sakim. Sa maliit na baryo sa loob ng Siramag, naninirahan si Gregorio, isang binatang may malawak na pang-unawa at pusong makabayan. Siya'y anak ng isang mangingisda at isang manggamot ngunit ang kanyang talino ay higit pa sa karaniwan. Sa kanyang murang edad, kilala na siya sa bayan bilang tagapayo ng matatanda at tagapag-ugnay ng mga magkakabaryo.`,

      `Tuwing gabi, pinakikinggan ni Gregorio ang mga kwento ni Lola Apia, ang matandang tagapag-ingat ng alamat ng Siramag. “Anak,” ani ni Lola Apia, “ang gubat na ito’y hindi basta lupa. Bawat puno rito ay may alaala, bawat ugat ay may buhay. Si Sirang Alamag ang nagbabantay sa atin, igalang mo siya at iingatan ka rin niya.” Tumango si Gregorio, at pinangako sa kanyang sarili na balang araw ay ipagtatanggol niya ang lupang kanyang kinagisnan. Dumating ang panahon ng pananakop. Isang grupo ng mga Kastila, pinamumunuan ni Don Emilio ang dumating sa Siramag. Nang makita nila ang kayamanang taglay ng kagubatan, ginto sa ilog, mababangong kahoy, at matabang lupa ay pinilit nilang angkinin ang lahat. “Sa ngalan ng korona, ang lupaing ito ay amin!” sigaw ni Don Emilio habang itinayo ang kanilang bandila sa gitna ng kagubatan.`,

      `Hinuli nila ang ilang kalalakihan at pinagtrabaho, sinunog ang ilang bahagi ng gubat, at winasak ang mga altar ng ninuno. Ang mga tao ay natakot, ang ilan ay nagtago, at ang iba'y napilitang sumunod. Ngunit hindi natakot si Gregorio. “Hindi tayo alipin,” wika niya. “Ang lupaing ito’y hindi nila pag-aari. At hindi rin tayo magpapalupig habang tayo’y may lakas at dangal.”`,

      `Sa isang gabi ng dilim at katahimikan, tinipon ni Gregorio ang mga matanda at kabataan. Humingi siya ng gabay sa mga espiritu, at nag-alay sa paanan ng punong sagradong naroroon mula pa sa panahon ni Sirang Alamag. At hindi nagtagal, dumilim ang langit. Umihip ang hangin. Dumagundong ang lupa. Nagpakita si Sirang Alamag. Kumikinang ang kanyang katawan sa liwanag ng buwan, at may tinig siyang pumuno sa buong gubat. “Lupang ito’y hindi ninyo pag-aari. Sa pangalan ng kalikasan at mga ninuno kayo ay paaalisin.”`,

      `Hindi naniwala si Don Emilio. Tumawa siya nang malakas at sinubukang saksakin ang diwata. Ngunit bigla siyang nilamon ng lupa, at hindi na muling nakita. Ang mga sundalo’y nagtakbuhan, habang isang malakas na sigaw ng hangin ang tila nagpaalis sa kanila sa Siramag.`,

      `Mula noon, muling nanumbalik ang kapayapaan. Sa kabila ng trahedya at takot, sinimulang buuin ni Gregorio ang bagong kinabukasan ng Siramag. Nagpatayo siya ng mga paaralan, pinayabong ang palitan ng produkto, at hinimok ang mga tao na ibalik ang respeto sa kalikasan. Dahil sa kanyang katapangan, ang mga tao ay muling nagtipon. Humingi sila ng tulong sa pamahalaang panlalawigan upang kilalanin ang kanilang nayon. At sa pagdinig ng kanilang kahilingan, nagdesisyon ang mga opisyal “ang lugar na dating tinatawag na Siramag ay ngayon ay tatawaging… BALATAN bilang parangal sa kanyang tagapagligtas, si Gregorio Balatan.”`,
    ]
  },
   {
    src: "./img/neustra.jpg",
    category: "Alamat ng Siramag",
    description: [
      `Isang umaga taong 1614, isang malakas na pagsabog ang naganap sa Mt. Asog (Mt. Iriga), na nagdulot ng matinding takot sa mga residente ng Iriga at kalapit na bayan ng Nabua kung saan naglalakad sila Peter, Mark,Justin sa burol ng Inorogan nang makita nila ang isang imahen ng Birheng Maria na may kalung-kalong na batang si Hesus agad nila itong nilapitan at sinabi ni Peter sa kasama niya na si Mark “hali kayo rito may birhen akong nakita tignan niyo” at agad pumunta ang dalawa upang makita nila ang tinutukoy ni Peter. Ang nasabi lang ni Mark “hala totoo nga isang imahen ang nakalagay sa isang malaking bato pano nangyari yun Peter isang himala.” Mga ilang oras nilang tinitigan ang imahe at doon nila napagdesisyonan na ipaalam sa isang pari ng simbahan sa lungsod ng Iriga kung saan mabilis na tumakbo sila Peter agad naman itong natanaw ng pari tila nagtataka ito kung bakit parang natataranta ang tatlong bata at sumisigaw pa ng paulit ulit ng “father,” agad nito tinanong ang tatlong bata "bakit kayo nagsisisigaw?” Anong problema niyong tatlo?" agad naman sumagot si Peter “father may nakita po kaming Isang imahe ng birhen samahan niyo po kami upang makuha ang birhen, agad nagtaka ang pari at ang sagot “huwag ninyo akong pinagloloko, hindi tama yan, agad naman nanghina sila Peter sapagkat hindi sila pinapakinggan ni father Mateo kaya umalis nalang silang tatlo upang maghanap at mag-isip kung sino pa ang puwedeng hingian ng tulong.`,

      `Kinabukasan, pumunta si Mark kila Peter upang sabihin na may naisip itong plano "Peter alam mo ba kung saan puwedeng humingi ng tulong para makuha natin Yung imahe?" Agad naman sumagot si Peter “saan naman ito?”  "Edi sa Nabua may kilala akong pari doon alam kong paniniwalaan niya tayo tara na puntahan natin si Justin para masabi na natin Kay father Noel." Nagtungo ang tatlo kay Father Noel at sinabi na may nakita silang isang imahe ng birhen kung saan natuwa si father Noel at sumama upang masaksihan ang sinasabing imahe. Agad na gulat si father Noel sa Nakita, isang imahe na may kalong na batang Hesus. hindi nagdalawang isip si father na kunin ang imahe at dalhin sa simbahan ng Nabua. `,

      `Makalipas ang ilang araw, agad nabalitaan ni father Mateo na may nakuhang imahe sa lugar ng Iriga agad nitong pinuntahan sa simbahan ng Nabua upang kunin ang birhen maayus naman binigay ni father Noel ngunit hindi ito masala ng mga kasamahan ni father Mateo kung saan parang ayaw sumama ng imahe sa kanila. Laking gulat ng dalawang pari at ng mga kasamahan. Kaya nagusap ang dalawang pari tungkol sa imahe “siguro brother Mateo hayaan mo muna dito samin ang imahe maari ka nalang magpagawa ng bersyon niyo upang ilagay sa ipapatayong chapel sa taas ng Inorogan sapagkat kahit anong gawin mo hindi mo madala-dala ang imahe wala tayong magagawa niyan kung naniwala kalang sana sa tatlong batang ito sa inyo sana napunta ang imahe.” `,

      `At masayang nagtapos ang paguusap ng dalawang pari simula noon hangang ngayon dinadayo ang Inorogan at taon-taon ay may nagaganap na alay lakad patungo sa taas nito at bawat stasyon. Bilang pasasalamat, isang lokal na philanthropist na si Mateo Sanchez ang nagpatayo ng isang chapel sa tuktok ng burol ng Inorogan upang ipagdiwang ang himalang ito. Ang imahen ng Birhen ay kinilala bilang Nuestra Señora de las Angustias.`
    ]
   },
   {
    src: "./img/alamat-buluang.jpg",
    category: "Alamat ng Siramag",
    description: [
      `Alamat ng Buluang ng Baao, Camarines Sur Noong unang panahon, sa isang payak na baryo na napapalibutan ng malalagong kagubatan at malinis na ilog, namumuhay ang isang mag-anak na sina Mang Ildefonso at Aling Maria kasama ang kanilang anak na si Luningning. Kilala ang mag-anak na ito sa kanilang sipag at kabaitan sa mga taga-baryo. `,

      `Isang araw, nagpasya si Luningning na maligo sa isang ilog na matatagpuan sa paanan ng isang malaking puno ng Tipolo. Habang naliligo, napansin niya ang kakaibang mga bato sa gilid ng ilog. Ito ay makinis at kulay ginto kapag nasisinagan ng araw. Tuwang-tuwa siya kaya’t kinuha niya ang ilan at ipinakita sa kanyang mga magulang. Nang makita ito ni Mang Ildefonso, napangiti siya at sinabi, “Napakaganda ng mga batong ito, anak. Tila ba pinanday ng mga diwata ng kagubatan.” Pinag-usapan nilang mag-anak na baka may nakatagong kayamanan sa ilalim ng puno ng Tipolo. Kinabukasan, bumalik si Mang Ildefonso at Luningning sa ilog upang maghukay. Sa kanilang paghuhukay, nakatagpo sila ng isang maliit na sisidlan na yari sa puting bato. Nang buksan nila ito, kumislap ang liwanag at lumabas ang tila alon ng liwanag na kulay ginto. `,

      `Sa gitna ng liwanag, may anyo ng isang matandang lalaki na tila isang diwata ng kagubatan. “Ako si Apo Bulawan,” wika ng diwata.“ Ako ang tagapag-ingat ng kayamanan ng Tipolo. Dahil sa inyong kabutihan at kasipagan, ibinabahagi ko sa inyo ang aking biyaya.” Agad na naglaho si Apo Bulawan, ngunit naiwan ang mga batong kumikislap. Tinawag iyon ng mga tao na bulawan (ginto), at mula noon, tinawag ang lugar na Buluang, bilang pag-alala sa mga gintong bato na natuklasan nina Mang Ildefonso at Luningning at sa diwata ng kagubatan na si Apo Bulawan. Dahil dito ay naging masagana ang baryo ng Buluang. Ang mga ilog ay naging hitik sa isda, at ang mga pananim ay naging masagana. Hanggang ngayon, pinaniniwalaan ng mga taga-Buluang na patuloy pa ring nagbabantay si Apo Bulawan sa kanilang bayan, lalo na tuwing dapithapon, kapag ang araw ay kumikislap at sumasayaw sa mga dahon ng Tipolo. At iyan ang pinagmulan ng pangalan ng Buluang ng Baao, Camarines Sur.`
    ],
  },

];

export default function Galerya() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((img) => ({
    src: img.src,
    description: img.description,
    category: img.category,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen md:px-12 pt-30 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">Galerya</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed italic mt-4 text-center">
          Ang larawang ito ay hango sa digital poster na lalong napapakulay sa mga kuwento. Sa gayon, ang digital poster ay nagsisilbing isang mabisang pantulong upang maging mas malinaw, makulay, at nakakahikayat ang paglalahad ng mga kuwento.
        </p>

        <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              className="rounded-xl cursor-zoom-in hover:scale-105 transition-transform"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              alt={img.category}
            />
          ))}
        </div>

        <Lightbox
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
            render={{
            slide: ({ slide }) => (
              <div className="flex flex-col h-full">
                  
                <div className="flex-shrink-0">
                  <img 
                    src={slide.src}
                    alt={slide.category}
                    className="max-h-[30vh] w-auto mx-auto rounded-xl"
                  />
                </div>
                <div className="flex-grow no-scrollbar overflow-y-auto px-4 my-5 max-h-[70vh] max-w-5xl">
                  <div className="prose  text-[#FFF2F9]">
                    {slide.description.map((desc, idx) => (
                      <p className="mb-3 text-lg indent-10" key={idx}>
                         {/* <div className="p-8">
                          <TextReader text={desc} />
                        </div> */}
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          }}
        />
      </main>
    </>
  );
}

