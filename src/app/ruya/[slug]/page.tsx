import Link from "next/link";
import { notFound } from "next/navigation";
import { generateStaticDreamDetail } from "@/lib/ai-content";

const RUYA_VERILERI: Record<string, {
  baslik: string;
  icon: string;
  anlam: string;
  detay: string;
  olumlu: string[];
  olumsuz: string[];
  tavsiye: string;
  kategori?: string;
}> = {
  // UÇMA RÜYALARI
  "ozgurce-ucmak": {
    baslik: "Özgürce Uçmak",
    icon: "🦅",
    kategori: "Uçma Rüyaları",
    anlam: "Başarı, özgürlük, engelleri aşma ve yükseliş simgesidir.",
    detay: "Rüyada özgürce ve kolayca uçmak, hayatınızda büyük bir özgürlük hissi yaşadığınızı veya yakında yaşayacağınızı gösterir. Bu rüya, hedeflerinize ulaşma yolunda engelleri aştığınızın, kendinize güvendiğinizin ve potansiyelinizi gerçekleştirdiğinizin işaretidir. Gökyüzünde süzülmek, ruhsal olarak da yükseldiğinizi simgeler.",
    olumlu: ["Kariyer başarısı", "Özgüven artışı", "Hedeflere ulaşma", "Spiritüel yükseliş", "Yaratıcı potansiyel"],
    olumsuz: ["Aşırı özgüven riski", "Gerçeklikten kopma"],
    tavsiye: "Bu olumlu enerjiyi değerlendirin. Hayallerinizin peşinden gidin, şu an tam zamanı. Ancak ayaklarınızı yere basmayı da unutmayın."
  },
  "zorlanarak-ucmak": {
    baslik: "Zorlanarak Uçmak",
    icon: "💨",
    kategori: "Uçma Rüyaları",
    anlam: "Engeller, zorluklar, mücadele ve çaba gerektiren hedefler.",
    detay: "Rüyada uçmaya çalışıp zorlanmak, hayatınızda hedeflerinize ulaşmak için mücadele ettiğinizi gösterir. Kanat çırpmak, yükselememek veya sürekli düşmek, karşılaştığınız engelleri simgeler. Bu rüya, başarının kolay gelmeyeceğini ama imkansız olmadığını hatırlatır.",
    olumlu: ["Azim ve kararlılık", "Mücadele ruhu", "Gelişim fırsatı", "Güçlenme"],
    olumsuz: ["Tükenmişlik riski", "Aşırı stres", "Engellerle boğuşma", "Yetersizlik hissi"],
    tavsiye: "Kendinize çok yüklenmeyin. Hedeflerinizi küçük adımlara bölün. Yardım istemekten çekinmeyin ve dinlenmeyi ihmal etmeyin."
  },
  "yuksekten-ucmak": {
    baslik: "Yüksekten Uçmak",
    icon: "☁️",
    kategori: "Uçma Rüyaları",
    anlam: "Büyük hedefler, hırs, geniş perspektif ve vizyon.",
    detay: "Çok yükseklerden uçmak, büyük hayalleriniz ve hırslarınız olduğunu gösterir. Bulutların üzerinde uçmak, sıradan düşüncelerden ve günlük kaygılardan yükseldiğinizi simgeler. Bu rüya, geniş bir bakış açısına sahip olduğunuzu ve büyük resmi görebildiğinizi anlatır.",
    olumlu: ["Vizyon sahibi olmak", "Büyük düşünmek", "Liderlik potansiyeli", "Spiritüel farkındalık"],
    olumsuz: ["Gerçeklikten kopma", "Detayları kaçırma", "Kibir riski"],
    tavsiye: "Büyük hayaller güzel ama somut adımlar atmayı unutmayın. Vizyonunuzu eyleme dönüştürün."
  },
  "alcaktan-ucmak": {
    baslik: "Alçaktan Uçmak",
    icon: "🌿",
    kategori: "Uçma Rüyaları",
    anlam: "Temkinli ilerleme, gerçekçi hedefler ve güvenli adımlar.",
    detay: "Yere yakın uçmak, temkinli ve gerçekçi bir yaklaşımınız olduğunu gösterir. Risklerden kaçınıyor, güvenli adımlar atıyorsunuz. Bu rüya, pratik düşündüğünüzü ama belki de potansiyelinizin altında kaldığınızı da gösterebilir.",
    olumlu: ["Gerçekçilik", "Güvenli ilerleme", "Pratik düşünce", "Ayakları yere basan yaklaşım"],
    olumsuz: ["Potansiyeli sınırlama", "Korku kaynaklı geri durma", "Fırsatları kaçırma"],
    tavsiye: "Güvenli olmak iyidir ama bazen risk almak gerekir. Kendinize daha çok güvenin ve sınırlarınızı zorlayın."
  },
  "ucarken-dusmek": {
    baslik: "Uçarken Düşmek",
    icon: "⬇️",
    kategori: "Uçma Rüyaları",
    anlam: "Kontrol kaybı, başarısızlık korkusu ve güvensizlik.",
    detay: "Uçarken aniden düşmek, hayatınızda kontrolü kaybetme korkusu yaşadığınızı gösterir. Başarının ardından gelen düşüş korkusu, imposter sendromu veya ani değişiklikler bu rüyayı tetikleyebilir. Düşüş hızı ve düşme şekli yorumu etkiler.",
    olumlu: ["Farkındalık", "Uyarı işareti", "Değişim fırsatı"],
    olumsuz: ["Başarısızlık korkusu", "Güvensizlik", "Anksiyete", "Kontrol kaybı hissi"],
    tavsiye: "Korkularınızla yüzleşin. Başarısızlık hayatın bir parçasıdır ve öğrenme fırsatıdır. Kendinize şefkat gösterin."
  },
  "kanatlarla-ucmak": {
    baslik: "Kanatlarla Uçmak",
    icon: "👼",
    kategori: "Uçma Rüyaları",
    anlam: "Spiritüel yükseliş, melek enerjisi ve koruma.",
    detay: "Kanatlara sahip olarak uçmak, spiritüel bir uyanış veya koruma altında olduğunuzu simgeler. Melek kanatları ilahi rehberliği, kuş kanatları özgürlüğü temsil eder. Bu rüya genellikle ruhsal gelişim dönemlerinde görülür.",
    olumlu: ["Spiritüel koruma", "İlahi rehberlik", "Ruhsal gelişim", "İç huzur", "Yüksek bilinç"],
    olumsuz: ["Dünyevi işleri ihmal", "Aşırı idealizm"],
    tavsiye: "Spiritüel yolculuğunuza devam edin. Meditasyon ve içsel çalışmalar size iyi gelecek. Rehberliğe açık olun."
  },

  // SU RÜYALARI
  "deniz-gormek": {
    baslik: "Deniz Görmek",
    icon: "🌊",
    kategori: "Su Rüyaları",
    anlam: "Bilinçaltı, duygusal derinlik, sonsuzluk hissi ve kolektif bilinç.",
    detay: "Deniz, bilinçaltınızın engin derinliklerini temsil eder. Sakin deniz iç huzuru, dalgalı deniz duygusal çalkantıyı, fırtınalı deniz ise krizleri simgeler. Denizin rengi ve berraklığı da yorumu etkiler.",
    olumlu: ["Duygusal derinlik", "Sezgisel güç", "Sonsuz potansiyel", "Şifa"],
    olumsuz: ["Duygusal bunaltı", "Bilinmeyenin korkusu", "Kontrolsüz duygular"],
    tavsiye: "Duygularınızın derinliklerine inmekten korkmayın. Bilinçaltınız size önemli mesajlar veriyor."
  },
  "nehir-gormek": {
    baslik: "Nehir Görmek",
    icon: "🏞️",
    kategori: "Su Rüyaları",
    anlam: "Hayatın akışı, değişim, yolculuk ve zaman.",
    detay: "Nehir, hayatın akışını ve zamanın geçişini simgeler. Nehrin akış yönü, hızı ve berraklığı yorumu belirler. Nehirde akmak hayatın akışına teslim olmayı, nehri geçmek ise bir geçiş dönemini temsil eder.",
    olumlu: ["Akışa teslim olma", "Doğal ilerleme", "Değişimi kabullenme", "Yolculuk"],
    olumsuz: ["Kontrolsüz sürüklenme", "Yön kaybı", "Hızlı değişim stresi"],
    tavsiye: "Hayatın akışına güvenin. Değişime direnmeyin, onunla birlikte akın."
  },
  "gol-gormek": {
    baslik: "Göl Görmek",
    icon: "🏔️",
    kategori: "Su Rüyaları",
    anlam: "İç huzur, durgunluk, yansıma ve meditasyon.",
    detay: "Göl, durgun ve yansıtıcı yapısıyla iç dünyanızı simgeler. Berrak göl zihinsel netliği, bulanık göl karışık düşünceleri temsil eder. Gölün kenarında olmak içe dönüş ihtiyacını gösterir.",
    olumlu: ["İç huzur", "Öz yansıma", "Meditasyon", "Dinginlik", "Netlik"],
    olumsuz: ["Durgunluk", "Hareketsizlik", "İçe kapanma"],
    tavsiye: "Kendinize zaman ayırın. Meditasyon ve içe dönüş pratikleri yapın. Düşüncelerinizi netleştirin."
  },
  "yagmur-gormek": {
    baslik: "Yağmur Görmek",
    icon: "🌧️",
    kategori: "Su Rüyaları",
    anlam: "Arınma, bereket, duygusal boşalma ve yenilenme.",
    detay: "Yağmur, gökyüzünden gelen bereket ve arınmayı simgeler. Hafif yağmur huzuru, şiddetli yağmur duygusal boşalmayı, fırtına ile yağmur ise krizleri temsil eder. Yağmurda ıslanmak arınmayı gösterir.",
    olumlu: ["Arınma", "Bereket", "Yenilenme", "Duygusal rahatlama", "Şifa"],
    olumsuz: ["Melankoli", "Üzüntü", "Duygusal taşma"],
    tavsiye: "Duygusal arınmaya izin verin. Ağlamak gerekiyorsa ağlayın. Yağmur sonrası güneş açar."
  },
  "sel-gormek": {
    baslik: "Sel Görmek",
    icon: "🌊",
    kategori: "Su Rüyaları",
    anlam: "Kontrolsüz duygular, baskı, temizlenme ve radikal değişim.",
    detay: "Sel, bastırılmış duyguların kontrolsüz şekilde taşmasını simgeler. Her şeyi silip süpüren sel, hayatınızda radikal bir temizlik veya değişim olacağını gösterir. Selden kaçmak duygulardan kaçmayı temsil eder.",
    olumlu: ["Köklü temizlik", "Yeni başlangıç", "Eski kalıpların yıkılması"],
    olumsuz: ["Kontrolsüz duygular", "Yıkım", "Kayıp", "Bunaltı"],
    tavsiye: "Duygularınızı bastırmayın, kontrollü şekilde ifade edin. Yoksa taşar ve zarar verir."
  },
  "havuz-gormek": {
    baslik: "Havuz Görmek",
    icon: "🏊",
    kategori: "Su Rüyaları",
    anlam: "Sınırlı duygular, kontrollü ortam ve sosyal çevre.",
    detay: "Havuz, sınırları belli olan duygusal alanı temsil eder. Temiz havuz kontrollü duyguları, kirli havuz ihmal edilmiş duyguları simgeler. Havuzda yüzmek sosyal ortamlardaki rahatınızı gösterir.",
    olumlu: ["Kontrollü duygular", "Güvenli alan", "Sosyal rahatlık", "Eğlence"],
    olumsuz: ["Duygusal sınırlama", "Yapay ortam", "Derinlik eksikliği"],
    tavsiye: "Güvenli alanınız iyi ama bazen sınırları aşmak gerekir. Duygusal derinliğe izin verin."
  },

  // AŞK RÜYALARI
  "eski-sevgili-gormek": {
    baslik: "Eski Sevgili Görmek",
    icon: "💔",
    kategori: "Aşk Rüyaları",
    anlam: "Kapanmamış duygular, geçmişle yüzleşme, özlem veya pişmanlık.",
    detay: "Eski sevgiliyi rüyada görmek, o kişiyi özlediğiniz anlamına gelmeyebilir. Genellikle o ilişkiden öğrendiğiniz dersleri, kapanmamış duyguları veya o dönemdeki kendinizi temsil eder. Bu rüya, geçmişle barışmanız gerektiğinin işareti olabilir.",
    olumlu: ["Geçmişten ders alma", "Kapanış fırsatı", "Öz farkındalık", "Büyüme"],
    olumsuz: ["Geçmişe takılma", "Karşılaştırma", "İlerleyememe"],
    tavsiye: "Geçmişte kalan duyguları işleyin ve bırakın. O ilişkiden ne öğrendiğinize odaklanın."
  },
  "opusmek": {
    baslik: "Öpüşmek",
    icon: "💋",
    kategori: "Aşk Rüyaları",
    anlam: "Yakınlık isteği, kabul görme, duygusal bağ kurma arzusu.",
    detay: "Rüyada öpüşmek, yakınlık ve kabul görme ihtiyacınızı yansıtır. Kiminle öpüştüğünüz önemlidir - tanıdık biri ise o kişiyle bağ kurma isteği, yabancı ise keşfedilmemiş yönlerinizi simgeler.",
    olumlu: ["Yakınlık", "Kabul", "Sevgi alışverişi", "Bağ kurma"],
    olumsuz: ["Karşılıksız sevgi korkusu", "Reddedilme endişesi"],
    tavsiye: "Sevgi vermeye ve almaya açık olun. Yakınlık kurmaktan korkmayın."
  },
  "evlenmek-ruya": {
    baslik: "Evlenmek",
    icon: "💒",
    kategori: "Aşk Rüyaları",
    anlam: "Bağlanma, yeni başlangıç, birleşme ve taahhüt.",
    detay: "Evlilik rüyası sadece romantik ilişkilerle ilgili değildir. İki farklı yönünüzün birleşmesini, yeni bir projeye bağlanmayı veya hayatınızdaki önemli bir taahhüdü simgeleyebilir. Düğün detayları yorumu etkiler.",
    olumlu: ["Bağlanma", "Birleşme", "Yeni dönem", "Taahhüt", "Ortaklık"],
    olumsuz: ["Bağlanma korkusu", "Özgürlük kaybı endişesi"],
    tavsiye: "Hayatınızda neye bağlanmak istediğinizi düşünün. Taahhütlerden korkmayın."
  },
  "aldatilmak": {
    baslik: "Aldatılmak",
    icon: "💢",
    kategori: "Aşk Rüyaları",
    anlam: "Güvensizlik, terk edilme korkusu, öz değer sorunları.",
    detay: "Aldatılma rüyaları çok yaygındır ve genellikle gerçek bir aldatmayı değil, güvensizlik duygularını, terk edilme korkusunu veya ilişkideki iletişim eksikliğini yansıtır. Kendi değerinize dair şüpheleriniz olabilir.",
    olumlu: ["Farkındalık", "İletişim ihtiyacının fark edilmesi"],
    olumsuz: ["Güvensizlik", "Kıskançlık", "Öz değer sorunları", "Paranoya"],
    tavsiye: "Güvensizlik duygularınızın kaynağını araştırın. Partnerinizle açık iletişim kurun."
  },
  "tanımadik-asik-olmak": {
    baslik: "Tanımadık Biriyle Aşk",
    icon: "❓",
    kategori: "Aşk Rüyaları",
    anlam: "Keşfedilmemiş yönler, ideal partner arayışı, iç anima/animus.",
    detay: "Tanımadığınız biriyle romantik rüya görmek, kendi keşfedilmemiş yönlerinizi veya ideal partnerinizi simgeler. Jung'a göre bu kişi, erkeklerde anima (iç kadın), kadınlarda animus (iç erkek) arketipini temsil eder.",
    olumlu: ["Öz keşif", "Potansiyel", "İdeal arayışı", "İç bütünleşme"],
    olumsuz: ["Gerçekdışı beklentiler", "Mevcut ilişkiyi ihmal"],
    tavsiye: "Bu rüyadaki kişinin özelliklerini düşünün - bunlar sizin geliştirmek istediğiniz yönleriniz olabilir."
  },
  "ayrilik-yasama": {
    baslik: "Ayrılık Yaşamak",
    icon: "🚶",
    kategori: "Aşk Rüyaları",
    anlam: "Değişim korkusu, kayıp endişesi, bağımsızlık isteği.",
    detay: "Rüyada ayrılık yaşamak, gerçek bir ayrılık isteği olmayabilir. Değişim korkusu, bağımsızlık ihtiyacı veya ilişkideki sorunların farkındalığını simgeler. Ayrılığı kim başlatıyor, bu önemli bir detaydır.",
    olumlu: ["Bağımsızlık", "Değişim fırsatı", "Öz yeterlilik"],
    olumsuz: ["Kayıp korkusu", "Terk edilme endişesi", "Yalnızlık"],
    tavsiye: "İlişkinizde neyin eksik olduğunu düşünün. Bağımsızlık ihtiyacınızı sağlıklı şekilde karşılayın."
  },

  // KABUS RÜYALARI
  "kovalanmak-kabus": {
    baslik: "Kovalanmak",
    icon: "🏃",
    kategori: "Kabus Rüyaları",
    anlam: "Kaçınılan sorunlar, bastırılmış korkular ve stres.",
    detay: "Kovalanma rüyası en yaygın kabuslardan biridir. Sizi kovalayan şey, hayatta kaçındığınız bir durumu temsil eder. Canavar, hayvan veya insan olması yorumu etkiler. Kaçamamak çaresizlik hissini simgeler.",
    olumlu: ["Farkındalık", "Değişim motivasyonu", "Yüzleşme fırsatı"],
    olumsuz: ["Kaçınma davranışı", "Kronik stres", "Anksiyete", "Çözülmemiş sorunlar"],
    tavsiye: "Kaçtığınız şeyle yüzleşin. Sorunları ertelemek onları büyütür. Ne veya kimden kaçıyorsunuz?"
  },
  "bogulmak": {
    baslik: "Boğulmak",
    icon: "😰",
    kategori: "Kabus Rüyaları",
    anlam: "Duygusal baskı, bunaltı, ifade edememe ve nefes alamama hissi.",
    detay: "Boğulma rüyası, duygusal olarak bunaldığınızı ve kendinizi ifade edemediğinizi gösterir. Suda boğulmak duygusal baskıyı, boğazdan boğulmak iletişim sorunlarını simgeler. Nefes alamama hayattaki sıkışmışlık hissini yansıtır.",
    olumlu: ["Duyguların farkındalığı", "Değişim ihtiyacının fark edilmesi"],
    olumsuz: ["Bunaltı", "İfade edememe", "Baskı altında hissetme", "Panik"],
    tavsiye: "Duygularınızı ifade edin. Sizi bunaltan durumları belirleyin ve sınır koyun. Nefes egzersizleri yapın."
  },
  "kaybolmak": {
    baslik: "Kaybolmak",
    icon: "🌫️",
    kategori: "Kabus Rüyaları",
    anlam: "Yön kaybı, belirsizlik, kimlik arayışı ve kararsızlık.",
    detay: "Kaybolma rüyası, hayatta yönünüzü kaybettiğinizi hissettiğinizi gösterir. Tanımadık bir yerde kaybolmak belirsizliği, tanıdık yerde kaybolmak kimlik krizini simgeler. Yol soramamak yardım istemekte zorlandığınızı gösterir.",
    olumlu: ["Keşif fırsatı", "Yeni yollar bulma", "Öz sorgulama"],
    olumsuz: ["Yön kaybı", "Belirsizlik", "Kararsızlık", "Kimlik krizi"],
    tavsiye: "Hedeflerinizi netleştirin. Hayatta nereye gitmek istediğinizi belirleyin. Yardım istemekten çekinmeyin."
  },
  "olum-gormek": {
    baslik: "Ölüm Görmek",
    icon: "💀",
    kategori: "Kabus Rüyaları",
    anlam: "Dönüşüm, son, yeni başlangıç ve büyük değişim.",
    detay: "Ölüm rüyası genellikle gerçek ölümü değil, bir dönemin sonunu ve yeni başlangıcı simgeler. Kendi ölümünüz ego ölümünü, başkasının ölümü o kişiyle ilişkinizin değişimini temsil eder. Korkulacak değil, dönüşüm işaretidir.",
    olumlu: ["Dönüşüm", "Yeni başlangıç", "Eski kalıpların ölümü", "Yenilenme"],
    olumsuz: ["Değişim korkusu", "Kayıp endişesi", "Son bulma hissi"],
    tavsiye: "Değişimi kabullenin. Bir şeyin bitmesi, yenisinin başlaması demektir. Dönüşüme izin verin."
  },
  "felc-olmak": {
    baslik: "Felç Olmak",
    icon: "🧊",
    kategori: "Kabus Rüyaları",
    anlam: "Çaresizlik, hareket edememe, karar verememe ve donup kalma.",
    detay: "Uyku felci ile karıştırılmamalı. Rüyada felç olmak, hayatta hareket edemediğinizi, kararlar veremediğinizi hissettiğinizi gösterir. Tehlike anında hareket edememek çaresizliği, konuşamamak ifade sorunlarını simgeler.",
    olumlu: ["Durumu değerlendirme fırsatı", "Sabır öğrenme"],
    olumsuz: ["Çaresizlik", "Karar verememe", "Hareketsizlik", "Korku"],
    tavsiye: "Küçük adımlarla başlayın. Her şeyi bir anda çözmeye çalışmayın. Bir adım atın, momentum kazanın."
  },
  "canavar-gormek": {
    baslik: "Canavar/Yaratık Görmek",
    icon: "👹",
    kategori: "Kabus Rüyaları",
    anlam: "Bastırılmış öfke, korkular, gölge benlik ve karanlık yönler.",
    detay: "Canavarlar, kendi bastırılmış ve kabul etmediğiniz yönlerinizi temsil eder. Jung'un 'gölge' kavramı budur. Canavarla savaşmak iç çatışmayı, kaçmak inkarı, dost olmak entegrasyonu simgeler.",
    olumlu: ["Gölge ile yüzleşme", "Bütünleşme fırsatı", "Güç kazanma"],
    olumsuz: ["Bastırılmış öfke", "İnkar", "İç çatışma", "Korku"],
    tavsiye: "Karanlık yönlerinizi kabul edin. Onları bastırmak yerine anlamaya çalışın. Gölgenizle barışın."
  },
  "dogal-afet": {
    baslik: "Doğal Afet",
    icon: "🌪️",
    kategori: "Kabus Rüyaları",
    anlam: "Kontrolsüz değişim, kaos, güçsüzlük hissi ve dış etkenler.",
    detay: "Deprem, sel, fırtına gibi doğal afetler, kontrolünüz dışındaki güçlü değişimleri simgeler. Deprem temel sarsıntısını, sel duygusal taşmayı, fırtına kaotik dönemleri temsil eder. Hayatta kalma içgüdüsünü test eder.",
    olumlu: ["Dayanıklılık", "Uyum yeteneği", "Hayatta kalma gücü"],
    olumsuz: ["Kontrolsüzlük", "Kaos", "Güçsüzlük", "Korku"],
    tavsiye: "Kontrol edemediğiniz şeyleri kabul edin. Değişime uyum sağlama yeteneğinizi geliştirin. Esnek olun."
  },

  "yilan-gormek": {
    baslik: "Yılan Görmek",
    icon: "🐍",
    anlam: "Yılan rüyaları genellikle gizli düşmanlar, tehlikeler veya dönüşümü simgeler.",
    detay: "Rüyada yılan görmek, bilinçaltınızın size bir uyarı gönderdiğini gösterebilir. Yılanın rengi, boyutu ve davranışı yorumu etkiler. Yeşil yılan şifa ve yenilenmeyi, siyah yılan gizli tehlikeleri, beyaz yılan ise spiritüel uyanışı temsil edebilir.",
    olumlu: ["Dönüşüm ve yenilenme", "Şifa enerjisi", "Bilgelik ve sezgi", "Kundalini uyanışı"],
    olumsuz: ["Gizli düşmanlar", "İhanet riski", "Bastırılmış korkular", "Güvensizlik"],
    tavsiye: "Çevrenizdeki insanları dikkatli değerlendirin. Sezgilerinize güvenin ve kendinizi koruyun."
  },
  "dis-dokulmesi": {
    baslik: "Diş Dökülmesi",
    icon: "🦷",
    anlam: "Diş dökülmesi rüyaları aile ile ilgili haberleri veya kayıp korkusunu simgeler.",
    detay: "Bu rüya türü en yaygın rüyalardan biridir. Genellikle kontrol kaybı, yaşlanma korkusu veya önemli bir değişikliği temsil eder. Bazı yorumlara göre aile bireylerinden haber alma anlamına da gelebilir.",
    olumlu: ["Yeni başlangıçlar", "Olgunlaşma", "Eski alışkanlıklardan kurtulma"],
    olumsuz: ["Kayıp korkusu", "Güvensizlik hissi", "Stres ve endişe"],
    tavsiye: "Hayatınızdaki değişimlere açık olun. Kontrolü bırakmayı öğrenin ve akışa güvenin."
  },
  "ucmak": {
    baslik: "Uçmak",
    icon: "✈️",
    anlam: "Uçma rüyaları özgürlük, başarı ve sınırları aşmayı simgeler.",
    detay: "Rüyada uçmak genellikle olumlu bir işarettir. Hayatınızda yükselişi, engelleri aşmayı ve özgürleşmeyi temsil eder. Uçuşun kolaylığı veya zorluğu, gerçek hayattaki durumunuzu yansıtır.",
    olumlu: ["Özgürlük hissi", "Başarı ve yükseliş", "Yaratıcılık", "Spiritüel gelişim"],
    olumsuz: ["Gerçeklikten kaçış", "Aşırı hırs", "Temelsiz hayaller"],
    tavsiye: "Hayallerinizin peşinden gidin ama ayaklarınızı yere basmayı unutmayın."
  },
  "su-gormek": {
    baslik: "Su Görmek",
    icon: "🌊",
    anlam: "Su rüyaları duygusal durumunuzu ve bilinçaltınızı yansıtır.",
    detay: "Suyun durumu duygusal halinizi gösterir. Berrak su huzur ve netliği, bulanık su karışıklık ve belirsizliği, dalgalı su duygusal çalkantıyı temsil eder. Deniz, göl veya nehir olması da yorumu etkiler.",
    olumlu: ["Duygusal arınma", "Sezgisel güç", "Yenilenme", "Bolluk"],
    olumsuz: ["Duygusal baskı", "Belirsizlik", "Kontrolsüz duygular"],
    tavsiye: "Duygularınızı bastırmayın, ifade edin. Meditasyon ve su elementli aktiviteler size iyi gelebilir."
  },
  "bebek-gormek": {
    baslik: "Bebek Görmek",
    icon: "👶",
    anlam: "Bebek rüyaları yeni başlangıçları, masumiyeti ve potansiyeli simgeler.",
    detay: "Rüyada bebek görmek genellikle hayatınıza yeni bir şeyin gireceğini gösterir. Bu bir proje, ilişki veya fikir olabilir. Bebeğin durumu (mutlu, ağlayan) yorumu etkiler.",
    olumlu: ["Yeni başlangıçlar", "Yaratıcılık", "Masumiyet", "Umut"],
    olumsuz: ["Sorumluluk korkusu", "Savunmasızlık", "Bağımlılık"],
    tavsiye: "Yeni fırsatlara açık olun. İçinizdeki çocuğu ihmal etmeyin."
  },
  "ev-gormek": {
    baslik: "Ev Görmek",
    icon: "🏠",
    anlam: "Ev rüyaları iç dünyanızı, ailenizi ve güvenlik ihtiyacınızı temsil eder.",
    detay: "Rüyadaki ev sizin psişenizi simgeler. Evin durumu, odaları ve atmosferi iç dünyanızı yansıtır. Eski ev geçmişi, yeni ev değişimi, harap ev ihmal edilmiş yönlerinizi gösterir.",
    olumlu: ["Güvenlik", "Aile bağları", "İç huzur", "Kökler"],
    olumsuz: ["Geçmişe takılma", "Güvensizlik", "Aile sorunları"],
    tavsiye: "İç dünyanıza özen gösterin. Ev ve aile ilişkilerinizi gözden geçirin."
  },
  "kovalanmak": {
    baslik: "Kovalanmak",
    icon: "🏃",
    anlam: "Kovalanma rüyaları kaçınılan sorunları ve bastırılmış korkuları simgeler.",
    detay: "Bu rüya türü çok yaygındır ve genellikle hayatta kaçındığınız bir durumu temsil eder. Sizi kovalayan şey, yüzleşmeniz gereken konuyu simgeler.",
    olumlu: ["Farkındalık", "Değişim motivasyonu", "İçgörü"],
    olumsuz: ["Kaçınma davranışı", "Stres", "Çözülmemiş sorunlar"],
    tavsiye: "Kaçtığınız şeyle yüzleşin. Sorunları ertelemek onları büyütür."
  },
  "dusmek": {
    baslik: "Düşmek",
    icon: "⬇️",
    anlam: "Düşme rüyaları kontrol kaybını ve güvensizlik hissini simgeler.",
    detay: "Rüyada düşmek genellikle hayatınızda kontrolü kaybettiğinizi hissettiğinizi gösterir. İş, ilişki veya finansal konularda belirsizlik yaşıyor olabilirsiniz.",
    olumlu: ["Bırakma ve teslim olma", "Yeni perspektif", "Uyanış"],
    olumsuz: ["Kontrol kaybı", "Başarısızlık korkusu", "Güvensizlik"],
    tavsiye: "Hayatınızda neyi kontrol edemediğinizi belirleyin ve kabul etmeyi öğrenin."
  },
};

export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(RUYA_VERILERI).map((slug) => ({ slug }));
}

export default async function RuyaDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruya = RUYA_VERILERI[slug];

  if (!ruya) {
    notFound();
  }

  const aiDetail = await generateStaticDreamDetail({
    dreamTitle: ruya.baslik,
    dreamKeywords: ruya.anlam,
  });

  const detay = aiDetail?.detay ?? ruya.detay;
  const olumlu = aiDetail?.olumlu?.length ? aiDetail.olumlu : ruya.olumlu;
  const olumsuz = aiDetail?.olumsuz?.length ? aiDetail.olumsuz : ruya.olumsuz;
  const tavsiye = aiDetail?.tavsiye ?? ruya.tavsiye;

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #ffffff 100%)",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link
            href="/ruya-tabirleri"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", textDecoration: "none" }}
          >
            ← Rüya Tabirleri
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "rgba(129,140,248,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}
            >
              {ruya.icon}
            </div>
            <div>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff" }}>
                Rüyada {ruya.baslik}
              </h1>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>
                {ruya.anlam}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

            {/* Detaylı Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>📖</span> Detaylı Yorum
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "1.05rem" }}>{detay}</p>
            </div>

            {/* Olumlu Anlamlar */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>✅</span> Olumlu Anlamlar
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {olumlu.map((item, i) => (
                  <li key={i} style={{ padding: "0.5rem 0", color: "#ffffff", fontSize: "0.95rem", borderBottom: i < olumlu.length - 1 ? "1px solid #1a0b2e" : "none" }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Olumsuz Anlamlar */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#991b1b", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>⚠️</span> Dikkat Edilmesi Gerekenler
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {olumsuz.map((item, i) => (
                  <li key={i} style={{ padding: "0.5rem 0", color: "#b91c1c", fontSize: "0.95rem", borderBottom: i < olumsuz.length - 1 ? "1px solid #fecaca" : "none" }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tavsiye */}
            <div style={{ background: "linear-gradient(135deg, #818cf815, #6366f115)", borderRadius: "20px", padding: "1.5rem", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>💡</span> Tavsiye
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.7 }}>{tavsiye}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Diğer Rüyalar */}
      <section style={{ padding: "2rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
            Diğer Popüler Rüyalar
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {Object.entries(RUYA_VERILERI).filter(([key]) => key !== slug).slice(0, 4).map(([key, data]) => (
              <Link
                key={key}
                href={`/ruya/${key}`}
                style={{
                  padding: "0.75rem 1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "12px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span>{data.icon}</span>
                <span style={{ color: "#ffffff", fontWeight: 500 }}>{data.baslik}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link
              href="/ruya/sozluk"
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                color: "#ffffff",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              📖 Tüm Rüya Sözlüğü
            </Link>
          </div>
        </div>
      </section>

      {/* Diğer Rüyalar - Yatay Scroll */}
      <section style={{ padding: "2rem 0", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            🌙 Diğer Rüya Yorumları
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "0.5rem 1rem 1.5rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
          {Object.entries(RUYA_VERILERI)
            .filter(([key]) => key !== slug)
            .map(([key, data]) => (
              <Link
                key={key}
                href={`/ruya/${key}`}
                style={{
                  minWidth: "180px",
                  padding: "1.25rem",
                  background: "linear-gradient(135deg, #818cf810, #6366f110)",
                  borderRadius: "16px",
                  textDecoration: "none",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  border: "1px solid #ffffff",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{data.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {data.baslik}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#ffffff", lineHeight: 1.4 }}>
                  {data.anlam.slice(0, 50)}...
                </p>
              </Link>
            ))}
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
        </div>
      </section>
    </div>
  );
}
