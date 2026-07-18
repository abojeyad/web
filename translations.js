/**
 * Yourdis — Translation File
 * ─────────────────────────────────────────────────────────────
 * Structure: translations[key] = { en: '...', ar: '...' }
 * Keys marked with (HTML) contain tags like <em> or <br>.
 * Stores array is at the bottom — used to build the marquee.
 */

const translations = {

  // ─── General ─────────────────────────────────────────────────

  lang_toggle: { en: 'العربية', ar: 'English' },

  // ─── Landing Page ────────────────────────────────────────────

  hero_eyebrow: {
    en: 'Saudi Arabia\'s Perfume Price Guide',
    ar: 'دليل أسعار العطور في السعودية',
  },
	hero_headline: { // HTML
	  en: 'Best <em>fragrances.</em><br>Top stores.<br>Best price.',
	  ar: 'أفضل <em>العطور</em><br>من أفضل المتاجر<br>بأفضل سعر',
	},
  hero_sub: {
    en: 'Compare authentic perfume prices across trusted luxury stores in Saudi Arabia — instantly. Set price alerts, earn cashback, and join a community of fragrance lovers.',
    ar: 'قارن أسعار العطور الأصلية عبر أفضل المتاجر الموثوقة والفاخرة في السعودية — بشكل فوري. تلقَّ تنبيهات الأسعار، واكسب استرداداً نقدياً، وانضم إلى مجتمع عشاق العطور.',
  },
  hero_cta_primary: { en: 'Get the App', ar: 'حمّل التطبيق' },
  hero_cta_secondary: { en: 'How it works', ar: 'كيف يعمل' },
  stat_fragrances_label: { en: 'Fragrances', ar: 'عطر في التطبيق' },
  stat_brands_label: { en: 'Brands', ar: 'دار عطرية' },
  stat_stores_label: { en: 'Verified Stores', ar: 'متجر موثوق' },
  stat_cashback_label: {
    en: 'Cashback on Every Purchase',
    ar: 'استرداد نقدي على كل شراء',
  },
  scroll_hint: { en: 'SCROLL', ar: 'مرر' },
  stores_section_label: {
    en: 'TRACKING PRICES ACROSS 25+ VERIFIED SAUDI STORES',
    ar: 'نتتبع الأسعار عبر أكثر من 25 متجراً سعودياً موثوقاً',
  },
  stores_reveal_cta: { en: 'See All Stores', ar: 'عرض كل المتاجر' },
  stores_reveal_hint: {
    en: 'Discover our network of 25+ verified Saudi stores',
    ar: 'اكتشف شبكتنا المكوّنة من أكثر من 25 متجراً سعودياً موثوقاً',
  },
  how_section_label: { en: 'SIMPLE AS 1-2-3', ar: 'بسيط كـ 1-2-3' },
  how_section_title: { en: 'How Yourdis works', ar: 'كيف يعمل يوردس' },
  how_step1_title: { en: 'Search any fragrance', ar: 'ابحث عن أي عطر' },
  how_step1_body: {
    en: 'Look up any perfume by name, brand, or scent note. Our catalogue covers more than 131,000 fragrances from over 7,752 brands.',
    ar: 'ابحث عن أي عطر بالاسم أو الدار أو النوتة. يضم كتالوجنا أكثر من 131,000 عطر من أكثر من 7,752 دار عطور.',
  },
  how_step2_title: { en: 'Compare every store', ar: 'قارن بين كل المتاجر' },
  how_step2_body: {
    en: 'See every store\'s price side by side, sorted cheapest first. Delivery info and stock status included for each listing.',
    ar: 'شاهد أسعار كل المتاجر جنباً إلى جنب، مرتبةً من الأرخص. مع معلومات التوصيل والمخزون لكل قائمة.',
  },
  how_step3_title: { en: 'Buy at the best price', ar: 'اشترِ بأفضل سعر' },
  how_step3_body: {
    en: 'Tap to visit the store and complete your purchase. You earn 2% cashback automatically, credited to your wallet every time.',
    ar: 'اضغط لزيارة المتجر وإتمام شرائك. تكسب استرداداً نقدياً بنسبة 2% تلقائياً، يُضاف إلى محفظتك في كل مرة.',
  },
  features_section_label: { en: 'FEATURES', ar: 'المميزات' },
  features_section_title: { // HTML
    en: 'Everything you need<br>for smarter fragrance shopping',
    ar: 'كل ما تحتاجه<br>للتسوق بذكاء أكبر',
  },
  // ─── Landing page — 5 feature slides ───────────────────────────
  fragrance_info_title: { en: 'Everything you need to know about your fragrance', ar: 'كل ما تحتاج معرفته عن عطرك' },
  fragrance_info_body: {
    en: 'Explore the main accords, fragrance notes, price history, and community ratings and reactions — along with detailed information to help you get to know the fragrance and make an informed purchase decision.',
    ar: 'اطلع على الاتفاقات الرئيسية، والنوتات العطرية، وتاريخ تغير الأسعار، وتقييمات وتفاعلات المجتمع، إلى جانب معلومات تفصيلية تساعدك على التعرف على العطر واتخاذ قرار شراء مدروس.',
  },
  search_discover_title: { en: 'Search and discover your perfect fragrance', ar: 'ابحث واكتشف عطرك المثالي' },
  search_discover_body: {
    en: 'Find any fragrance in Yourdis\'s catalog with our smart search engine. Search by fragrance name, brand, or notes — or use advanced search to filter by season, house, release year, country of origin, gender, fragrance families, and more, to reach the right fragrance fast.',
    ar: 'اعثر على أي عطر من خلال كتالوج يوردس باستخدام محرك البحث الذكي. ابحث باسم العطر، أو العلامة التجارية، أو النوتات العطرية، أو استخدم أدوات البحث المتقدم للتصفية حسب الموسم، والدار، وسنة الإصدار، وبلد المنشأ، والجنس، والعائلات العطرية، وغيرها من الخيارات للوصول إلى العطر المناسب بسرعة.',
  },
  personalize_title: { en: 'Customize your experience your way', ar: 'خصص تجربتك كما تريد' },
  personalize_body: {
    en: 'Build your fragrance library, make it private or public, and share it with friends. Track price alerts for the fragrances you care about, and set your interests and preferences so Yourdis can suggest fragrances that match your taste.',
    ar: 'أنشئ مكتبتك العطرية واجعلها خاصة أو عامة، وشاركها مع أصدقائك. تابع تنبيهات الأسعار للعطور التي تهمك، وحدد اهتماماتك وتفضيلاتك ليقدم لك يوردس اقتراحات وعطورًا تناسب ذوقك.',
  },
  best_price_title: { en: 'The best price, in one place', ar: 'أفضل سعر في مكان واحد' },
  best_price_body: {
    en: 'Compare a fragrance\'s price across every store and every available size on a single page, and find the best deal available — while reviewing all the fragrance details and information Yourdis gathers to help you make your purchase decision.',
    ar: 'قارن أسعار العطر بين مختلف المتاجر ومن خلال جميع الأحجام المتوفرة في صفحة واحدة، واعرف أفضل عرض متاح، مع الاطلاع على جميع تفاصيل العطر والمعلومات التي يجمعها يوردس لمساعدتك في اتخاذ قرار الشراء.',
  },
  trusted_pricing_title: { en: 'Trusted stores, always up to date', ar: 'متاجر موثوقة وأسعار محدثة' },
  trusted_pricing_body: {
    en: 'Yourdis gathers fragrance prices from a network of trusted online stores, with continuous price updates, so you can compare and buy with confidence — with no fees or markup added to the store\'s price.',
    ar: 'يجمع يوردس أسعار العطور من شبكة من المتاجر الإلكترونية الموثوقة، مع تحديث مستمر للأسعار، لتتمكن من المقارنة والشراء بثقة، دون أي رسوم أو زيادة على سعر المتجر.',
  },

  // ─── Highlight cards (icon + title + short description) ───
  fragrance_info_point1: { en: 'Main accords & notes', ar: 'الاتفاقات والنوتات' },
  fragrance_info_point1_desc: { en: 'Understand the fragrance\'s key ingredients and notes in detail.', ar: 'تعرّف على مكونات العطر الرئيسية والنوتات العطرية بالتفصيل.' },
  fragrance_info_point2: { en: 'Real price history', ar: 'تاريخ الأسعار' },
  fragrance_info_point2_desc: { en: 'See how the price has changed over time before you buy.', ar: 'تابع كيف تغيّر سعر العطر عبر الوقت قبل ما تشتري.' },
  fragrance_info_point3: { en: 'Community reactions', ar: 'آراء المجتمع' },
  fragrance_info_point3_desc: { en: 'See ratings and reactions from users who\'ve tried it.', ar: 'شوف تقييمات وتفاعلات مستخدمين جربوا نفس العطر.' },

  search_discover_point1: { en: 'Smart search', ar: 'بحث ذكي' },
  search_discover_point1_desc: { en: 'Search by name, brand, or fragrance note directly.', ar: 'دوّر بالاسم، البراند، أو النوتة العطرية مباشرة.' },
  search_discover_point2: { en: 'Advanced filters', ar: 'فلاتر متقدمة' },
  search_discover_point2_desc: { en: 'Filter by season, house, and release year.', ar: 'صفّي حسب الموسم، الدار، وسنة الإصدار.' },
  search_discover_point3: { en: 'Precise targeting', ar: 'تخصيص دقيق' },
  search_discover_point3_desc: { en: 'Set gender and fragrance family for a faster match.', ar: 'حدد الجنس والعائلة العطرية للوصول أسرع.' },

  personalize_point1: { en: 'Your own library', ar: 'مكتبتك الخاصة' },
  personalize_point1_desc: { en: 'Save your fragrances, keep them private or share them.', ar: 'احفظ عطورك واجعلها خاصة أو شاركها مع الكل.' },
  personalize_point2: { en: 'Price alerts', ar: 'تنبيهات الأسعار' },
  personalize_point2_desc: { en: 'Get notified the moment a favorite\'s price drops.', ar: 'نوصلك إشعار أول ما ينزل سعر عطر مفضل.' },
  personalize_point3: { en: 'Personalized picks', ar: 'اقتراحات مخصصة' },
  personalize_point3_desc: { en: 'Yourdis automatically suggests scents matching your taste.', ar: 'يوردس يقترح عطور تناسب ذوقك تلقائياً.' },

  best_price_point1: { en: 'Every store', ar: 'كل المتاجر' },
  best_price_point1_desc: { en: 'See every store\'s price on a single page.', ar: 'شوف كل الأسعار من كل المتاجر بصفحة وحدة.' },
  best_price_point2: { en: 'Every size', ar: 'كل الأحجام' },
  best_price_point2_desc: { en: 'Compare prices across every available size.', ar: 'قارن السعر عبر كل الأحجام المتوفرة للعطر.' },
  best_price_point3: { en: 'Best deal', ar: 'أفضل عرض' },
  best_price_point3_desc: { en: 'We sort cheapest-first so you decide fast.', ar: 'نرتّب لك الأرخص أول عشان تقرر بسرعة.' },

  trusted_pricing_point1: { en: 'Trusted network', ar: 'شبكة موثوقة' },
  trusted_pricing_point1_desc: { en: 'Stores manually reviewed and verified.', ar: 'متاجر تمّت مراجعتها والتحقق منها يدوياً.' },
  trusted_pricing_point2: { en: 'Always updated', ar: 'تحديث مستمر' },
  trusted_pricing_point2_desc: { en: 'Prices update continuously to stay accurate.', ar: 'الأسعار تتحدث باستمرار عشان تكون دقيقة.' },
  trusted_pricing_point3: { en: 'No extra fees', ar: 'بدون رسوم' },
  trusted_pricing_point3_desc: { en: 'You pay the exact store price, no markup.', ar: 'تدفع نفس سعر المتجر تماماً، بدون أي زيادة.' },

  feat_compare_title: { en: 'Real-time price comparison', ar: 'مقارنة الأسعار في الوقت الفعلي' },
  feat_compare_body: {
    en: 'Every listing is pulled live from store integrations. You always see the true current price — no guessing, no outdated data.',
    ar: 'كل قائمة تُسحب مباشرةً من تكاملات المتاجر. ترى دائماً السعر الحالي الحقيقي — بلا تخمين ولا بيانات قديمة.',
  },
  feat_compare_mock_label: { en: 'Creed Aventus · 100ml EDP', ar: 'كريد أفنتوس · 100مل' },
  feat_compare_best_badge: { en: 'BEST', ar: 'الأفضل' },
  compare_row1_store: { en: 'Najd Al Athiyah', ar: 'نجد العذية' },
  compare_row1_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>1,280</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>1,280</span>',
  },
  compare_row2_store: { en: 'Loja', ar: 'لوجا' },
  compare_row2_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>1,350</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>1,350</span>',
  },
  compare_row3_store: { en: 'PO One', ar: 'بي أو ون' },
  compare_row3_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>1,420</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>1,420</span>',
  },
  compare_row4_store: { en: 'Define', ar: 'ديفاين' },
  compare_row4_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>1,490</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>1,490</span>',
  },
  feat_alerts_title: { en: 'Price drop alerts', ar: 'تنبيهات انخفاض الأسعار' },
  feat_alerts_body: {
    en: 'Set your target price on any fragrance. The moment any store drops to or below it, you get a push notification instantly. Never miss a deal again.',
    ar: 'حدّد سعرك المستهدف لأي عطر. في اللحظة التي ينزل فيها سعر أي متجر إليه أو دونه، يصلك إشعار فوري. لا تفوّت أي صفقة مجدداً.',
  },
  feat_library_title: { en: 'Personal fragrance library', ar: 'مكتبتك العطرية الشخصية' },
  feat_library_body: {
    en: 'Save fragrances to Owned or Want to Try. Track price changes over time and know exactly when the right moment to buy arrives.',
    ar: 'احفظ العطور في \'أملكه\' أو \'أريد تجربته\'. تتبّع تغيّرات الأسعار واعرف متى حان الوقت المناسب للشراء.',
  },
  feat_data_title: { en: 'Rich fragrance data', ar: 'بيانات عطرية شاملة' },
  feat_data_body: {
    en: 'Every fragrance is documented by Yourdis experts — family, accords, notes pyramid, perfumer, release year, season, and time of day. Everything you need to choose with confidence.',
    ar: 'كل عطر موثَّق من خبراء يوردس — العائلة، التوافقات، هرم النوتات، العطار، سنة الإصدار، الموسم، والوقت. كل ما تحتاجه لتختار بثقة.',
  },
  feat_data_tag_family: { en: 'Family', ar: 'العائلة' },
  feat_data_tag_accords: { en: 'Accords', ar: 'التوافقات' },
  feat_data_tag_notes: { en: 'Notes', ar: 'النوتات' },
  feat_data_tag_perfumer: { en: 'Perfumer', ar: 'العطار' },
  feat_data_tag_year: { en: 'Year', ar: 'السنة' },
  feat_data_tag_time: { en: 'Time of Day', ar: 'وقت اليوم' },
  feat_data_tag_season: { en: 'Season', ar: 'الموسم' },
  feat_verified_title: { en: 'Only verified stores', ar: 'متاجر موثوقة فحسب' },
  feat_verified_body: {
    en: 'Every store on Yourdis is manually reviewed and verified. Shop with full confidence — no grey-market surprises, only authentic fragrances from trusted Saudi retailers.',
    ar: 'كل متجر في يوردس مراجَع وموثَّق يدوياً. تسوّق بثقة كاملة — بلا مفاجآت من السوق الرمادية، عطور أصيلة فقط من متاجر سعودية موثوقة.',
  },
  feat_sell_title: { en: 'Sell your fragrances — free', ar: 'بع عطورك — مجاناً' },
  feat_sell_body: {
    en: 'List your used fragrances for sale directly in the Yourdis community. Connect with buyers, agree on a price, and complete the sale — with absolutely no commissions and no additional fees charged by Yourdis.',
    ar: 'أعرض عطورك المستعملة للبيع مباشرةً في مجتمع يوردس. تواصل مع المشترين، اتفق على السعر، وأتمِّ البيع — دون أي عمولات أو رسوم إضافية من يوردس.',
  },
  feat_sell_mock_city: { en: 'Riyadh', ar: 'الرياض' },
  feat_sell_mock_badge: { en: 'For Sale', ar: 'للبيع' },
  feat_sell_mock_body: {
    en: 'Tom Ford Noir de Noir 100ml EDP — used about 10 times, great condition. Comes with original box.',
    ar: 'توم فورد نوار دي نوار 100مل — مستخدم 10 مرات تقريباً، حالة ممتازة. مع العلبة الأصلية.',
  },
  feat_sell_mock_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>520</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>520</span>',
  },
  feat_sell_perk1: { en: '0% commission — Yourdis takes nothing', ar: '0% عمولة — يوردس لا يأخذ شيئاً' },
  feat_sell_perk2: { en: 'No listing fees, no hidden charges', ar: 'لا رسوم نشر، لا رسوم خفية' },
  feat_sell_perk3: { en: 'Direct chat with buyer, you set your price', ar: 'تواصل مباشر مع المشتري، أنت تحدد السعر' },
  feat_history_title: { en: 'Full price history tracking', ar: 'تتبع كامل لتاريخ الأسعار' },
  feat_history_body: {
    en: 'See how any fragrance\'s price has moved across months. Understand seasonal patterns, spot when a price is unusually high or low, and time your purchase with confidence.',
    ar: 'شاهد كيف تحرّك سعر أي عطر عبر الأشهر. افهم الأنماط الموسمية، اكتشف متى يكون السعر غير اعتيادي، وأتمِّ شراءك في الوقت الأمثل.',
  },
  feat_history_chart_title: { en: 'DIOR SAUVAGE EDP · 6 MONTHS', ar: 'ديور سوفاج EDP · 6 أشهر' },
  feat_history_chart_price: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>380</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>380</span>',
  },
  feat_history_chart_change: { en: '↓ 12% from peak', ar: '↓ 12% عن الذروة' },
  feat_history_chart_note: { en: 'Good time to buy', ar: 'وقت مناسب للشراء' },
  feat_history_month_1: { en: 'Nov', ar: 'نوف' },
  feat_history_month_2: { en: 'Dec', ar: 'ديس' },
  feat_history_month_3: { en: 'Jan', ar: 'ين' },
  feat_history_month_4: { en: 'Feb', ar: 'فبر' },
  feat_history_month_5: { en: 'Mar', ar: 'مار' },
  feat_history_month_6: { en: 'Today', ar: 'اليوم' },
  cashback_section_label: { en: 'EARN WHILE YOU SHOP', ar: 'اكسب أثناء تسوّقك' },
  cashback_section_title: { // HTML
    en: '2% cashback,<br>every purchase.',
    ar: 'استرداد نقدي 2%<br>على كل عملية شراء.',
  },
  cashback_section_sub: {
    en: 'Every time you buy through a Yourdis link, 2% of the purchase value is credited to your in-app wallet automatically. Withdraw it anytime.',
    ar: 'في كل مرة تشتري عبر رابط يوردس، يُضاف 2% من قيمة الشراء إلى محفظتك داخل التطبيق تلقائياً. اسحبها متى شئت.',
  },
  cashback_perk1: {
    en: 'No codes to enter. No forms to fill. Cashback is tracked automatically.',
    ar: 'لا رموز تُدخل. لا نماذج تملأ. يُتتبّع الاسترداد النقدي تلقائياً.',
  },
  cashback_perk2: {
    en: 'No extra cost to you — commissions come from the store, not your wallet.',
    ar: 'بلا تكلفة إضافية عليك — العمولات تأتي من المتجر، لا من محفظتك.',
  },
  cashback_perk3: {
    en: 'Withdraw your balance at any time, no minimum threshold.',
    ar: 'اسحب رصيدك في أي وقت، بلا حد أدنى.',
  },
  cashback_wallet_label: { en: 'MY WALLET', ar: 'محفظتي' },
  cashback_wallet_balance: { // HTML
    en: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>47.60</span>',
    ar: '<span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>47.60</span>',
  },
  cashback_wallet_sub: { en: 'Available to withdraw', ar: 'متاح للسحب' },
  cashback_txn1: { en: 'Creed Aventus · Najd Al Athiyah', ar: 'كريد أفنتوس · نجد العذية' },
  cashback_txn2: { en: 'Dior Sauvage · Loja', ar: 'ديور سوفاج · لوجا' },
  cashback_txn3: { en: 'BDK Rouge Smoking · Abaq', ar: 'بي دي كي روج سموكنج · عبق' },
  cashback_txn1_amount: { // HTML
    en: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>25.60</span>',
    ar: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>25.60</span>',
  },
  cashback_txn2_amount: { // HTML
    en: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>7.60</span>',
    ar: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>7.60</span>',
  },
  cashback_txn3_amount: { // HTML
    en: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>14.40</span>',
    ar: '<span class="price">+<svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>14.40</span>',
  },
  community_section_label: { en: 'COMMUNITY', ar: 'المجتمع' },
  community_section_title: { // HTML
    en: 'A home for<br>fragrance lovers',
    ar: 'مجتمع عشّاق<br>العطور',
  },
  community_section_sub: {
    en: 'Ask questions, discover new scents, sell your used fragrances for free, and connect with thousands of fellow enthusiasts — all inside Yourdis.',
    ar: 'اطرح أسئلة، اكتشف عطوراً جديدة، بع عطورك المستعملة مجاناً، وتواصل مع آلاف المهتمين — كل ذلك داخل يوردس.',
  },
  comm_badge_inquiry: { en: 'Inquiry', ar: 'استفسار' },
  comm_badge_sale: { en: 'Sale', ar: 'بيع' },
  comm_badge_article: { en: 'Article', ar: 'مقالة' },
  comm_post1_text: { // HTML
    en: 'What\'s a good oud fragrance for winter evenings? Budget around <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>400</span>.',
    ar: 'ما هو عطر عود مناسب لأمسيات الشتاء؟ الميزانية حوالي <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>400</span>.',
  },
  comm_post1_replies: { en: '12 replies', ar: '12 رد' },
  comm_post1_views: { en: '340 views', ar: '340 مشاهدة' },
  comm_post2_text: { // HTML
    en: 'Selling Tom Ford Black Orchid 100ml EDP — used 5 times, barely sprayed. <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>280</span>.',
    ar: 'للبيع توم فورد بلاك أوركيد 100مل — مستخدم 5 مرات فقط. السعر <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>280</span>.',
  },
  comm_post2_replies: { en: '3 replies', ar: '3 ردود' },
  comm_post2_views: { en: '87 views', ar: '87 مشاهدة' },
  comm_post3_text: {
    en: 'Why Sillage matters more than Longevity — and how to tell the difference before you buy.',
    ar: 'لماذا الانتشار أهم من الثبات — وكيف تعرف الفرق قبل الشراء.',
  },
  comm_post3_replies: { en: '28 replies', ar: '28 رد' },
  comm_post3_views: { en: '1.2K views', ar: '1.2K مشاهدة' },
  ai_section_label: { en: 'ACCORD AI', ar: 'أكورد AI' },
  ai_section_title: { // HTML
    en: 'Your personal<br>fragrance expert.',
    ar: 'خبيرك العطري<br>الشخصي.',
  },
  ai_section_sub: { // HTML
    en: 'Ask anything — "What notes are in Sauvage?", "Best fresh fragrance under <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="Saudi Riyal"><use href="#riyal-symbol"></use></svg>300</span>?", "What should I wear to a wedding?" Accord AI gives expert-level answers and supports voice input.',
    ar: 'اسأل أي شيء — "ما نوتات سوفاج؟"، "أفضل عطر منعش بأقل من <span class="price"><svg class="riyal-icon" viewBox="0 0 1124.14 1256.39" role="img" aria-label="ريال سعودي"><use href="#riyal-symbol"></use></svg>300</span>؟"، "ماذا أرتدي في حفل زفاف؟" أكورد AI يقدم إجابات على مستوى الخبراء ويدعم الإدخال الصوتي.',
  },
  ai_name: { en: 'Accord AI', ar: 'أكورد AI' },
  ai_status: { en: '● Online', ar: '● متصل' },
  ai_bubble_user: {
    en: 'What\'s a good fragrance for the office? Something subtle.',
    ar: 'ما هو عطر جيد للمكتب؟ شيء هادئ.',
  },
  ai_bubble_assistant: {
    en: 'For an office setting, look for clean aquatic or light woody profiles — gentle citrus or soft musk works well. Dior Homme Cologne and Issey Miyake L\'Eau d\'Issey are timeless choices. Want me to compare current prices across stores?',
    ar: 'لبيئة المكتب، ابحث عن ملمح مائي نظيف أو خشبي خفيف — الحمضيات اللطيفة أو المسك الناعم مثالية. دير هوم كولون وإيسي مياكي خيارات كلاسيكية. هل تريد مقارنة الأسعار الحالية؟',
  },
  install_section_label: { en: 'AVAILABLE NOW', ar: 'متاح الآن' },
  install_section_title: { // HTML
    en: 'Start saving today.<br>It\'s completely free.',
    ar: 'ابدأ التوفير اليوم.<br>مجاناً تماماً.',
  },
  install_section_sub: {
    en: 'Compare prices, set alerts, and earn cashback on every purchase — all from one app.',
    ar: 'قارن الأسعار، تلقَّ التنبيهات، واكسب استرداداً نقدياً على كل عملية شراء — كل ذلك من تطبيق واحد.',
  },
  install_appstore_pre: { en: 'Download on the', ar: 'حمّل من' },
  install_appstore_name: { en: 'App Store', ar: 'App Store' },
  install_googleplay_pre: { en: 'Get it on', ar: 'احصل عليه من' },
  install_googleplay_name: { en: 'Google Play', ar: 'Google Play' },

  // ─── Footer ──────────────────────────────────────────────────

  footer_blog: { en: 'Blog', ar: 'المدونة' },
  footer_privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  footer_terms: { en: 'Terms of Service', ar: 'شروط الخدمة' },
  footer_contact: { en: 'Contact Us', ar: 'تواصل معنا' },
  footer_copy: {
    en: '© 2026 Yourdis. All rights reserved.',
    ar: '© 2026 يوردس. جميع الحقوق محفوظة.',
  },

  // ─── Shared Legal ─────────────────────────────────────────────

  nav_home: { en: 'Home', ar: 'الرئيسية' },
  nav_back_home: { en: '← Home', ar: 'الرئيسية →' },
  nav_home_aria: { en: 'Yourdis Home', ar: 'الصفحة الرئيسية ليوردس' },
  nav_menu_aria: { en: 'Menu', ar: 'القائمة' },
  legal_label: { en: 'LEGAL', ar: 'قانوني' },
  legal_updated: { en: 'Last updated: June 2026', ar: 'آخر تحديث: يونيو 2026' },
  section_1: { en: 'SECTION 1', ar: 'القسم 1' },
  section_2: { en: 'SECTION 2', ar: 'القسم 2' },
  section_3: { en: 'SECTION 3', ar: 'القسم 3' },
  section_4: { en: 'SECTION 4', ar: 'القسم 4' },
  section_5: { en: 'SECTION 5', ar: 'القسم 5' },
  section_6: { en: 'SECTION 6', ar: 'القسم 6' },
  section_7: { en: 'SECTION 7', ar: 'القسم 7' },
  section_8: { en: 'SECTION 8', ar: 'القسم 8' },
  section_9: { en: 'SECTION 9', ar: 'القسم 9' },
  section_10: { en: 'SECTION 10', ar: 'القسم 10' },
  section_11: { en: 'SECTION 11', ar: 'القسم 11' },
  section_12: { en: 'SECTION 12', ar: 'القسم 12' },
  section_13: { en: 'SECTION 13', ar: 'القسم 13' },

  // ─── Privacy Policy ───────────────────────────────────────────

  privacy_title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  privacy_intro: {
    en: 'This Privacy Policy explains how Yourdis collects, uses, and protects your personal data when you use our application and website. We are committed to handling your data with care and transparency, in full compliance with Saudi Arabia\'s Personal Data Protection Law (PDPL) issued by Royal Decree No. M/19 dated 9/2/1443H.',
    ar: 'توضح سياسة الخصوصية هذه كيفية جمع يوردس لبياناتك الشخصية واستخدامها وحمايتها عند استخدامك لتطبيقنا وموقعنا الإلكتروني. نلتزم بالتعامل مع بياناتك بعناية وشفافية، امتثالاً تاماً لنظام حماية البيانات الشخصية في المملكة العربية السعودية الصادر بالمرسوم الملكي رقم م/19 بتاريخ 9/2/1443هـ.',
  },
  privacy_s1_title: { en: 'Who We Are', ar: 'من نحن' },
  privacy_s1_p1: {
    en: 'Yourdis is a perfume price comparison platform serving the Saudi market. We allow users to compare fragrance prices across multiple verified online stores, set price alerts, earn cashback on purchases, and participate in a community of fragrance enthusiasts.',
    ar: 'يوردس منصة لمقارنة أسعار العطور تخدم السوق السعودية. نتيح للمستخدمين مقارنة أسعار العطور عبر متاجر إلكترونية موثوقة متعددة، وضبط تنبيهات الأسعار، وكسب استرداد نقدي على المشتريات، والمشاركة في مجتمع عشاق العطور.',
  },
  privacy_s1_p2: {
    en: 'Yourdis does not sell products directly. All purchases are completed on the retailer\'s own website.',
    ar: 'لا يبيع يوردس المنتجات مباشرةً. تُكمَل جميع عمليات الشراء على موقع المتجر الخاص به.',
  },
  privacy_s2_title: { en: 'Guest Use — No Account Required', ar: 'الاستخدام كضيف — لا حساب مطلوب' },
  privacy_s2_p1: {
    en: 'You can browse Yourdis, search fragrances, and compare prices without creating an account. In guest mode, we do not collect any personal data from you.',
    ar: 'يمكنك تصفح يوردس والبحث عن العطور ومقارنة الأسعار دون إنشاء حساب. في وضع الضيف، لا نجمع أي بيانات شخصية منك.',
  },
  privacy_s2_p2: {
    en: 'An account is only required if you wish to use features such as saving favourites, setting price alerts, participating in the community, chatting with Accord AI, or configuring personal preferences.',
    ar: 'الحساب مطلوب فقط إذا أردت استخدام ميزات مثل حفظ المفضلة، وضبط تنبيهات الأسعار، والمشاركة في المجتمع، والتحدث مع أكورد AI، أو ضبط التفضيلات الشخصية.',
  },
  privacy_s3_title: { en: 'Data We Collect When You Create an Account', ar: 'البيانات التي نجمعها عند إنشاء حساب' },
  privacy_s3_p1: {
    en: 'We offer three sign-in methods: email with OTP verification, Sign in with Google, or Sign in with Apple. When you register or sign in with your email address, we send a one-time verification code (OTP) to that email — no password is ever created or stored. In all cases, we only collect the minimum data necessary:',
    ar: 'نقدم ثلاث طرق لتسجيل الدخول: البريد الإلكتروني مع رمز التحقق، أو تسجيل الدخول عبر Google، أو تسجيل الدخول عبر Apple. عند التسجيل أو تسجيل الدخول بالبريد الإلكتروني، نرسل رمز تحقق لمرة واحدة (OTP) إلى بريدك — ولا يُنشأ أي كلمة مرور أو يُخزَّن. في جميع الحالات، نجمع الحد الأدنى من البيانات الضرورية فقط:',
  },
  privacy_s3_li1: {
    en: 'Email address — used to identify your account and send you service-related communications.',
    ar: 'عنوان البريد الإلكتروني — يُستخدم لتعريف حسابك وإرسال رسائل تتعلق بالخدمة.',
  },
  privacy_s3_li2: {
    en: 'Display name — the default name provided by Google or Apple, or the name you choose when registering with email. You can change this at any time.',
    ar: 'اسم العرض — الاسم الافتراضي الذي تقدمه Google أو Apple، أو الاسم الذي تختاره عند التسجيل بالبريد الإلكتروني. يمكنك تغييره في أي وقت.',
  },
  privacy_s3_li3: {
    en: 'Mobile number (optional) — you may add a phone number in your account settings for security purposes only. It is never required and never used for marketing.',
    ar: 'رقم الجوال (اختياري) — يمكنك إضافة رقم هاتف في إعدادات حسابك لأغراض أمنية فحسب. لا يُطلب أبداً ولا يُستخدم في التسويق.',
  },
  privacy_s3_p2: {
    en: 'We do not collect your full name, national ID, date of birth, or any biometric information.',
    ar: 'لا نجمع اسمك الكامل، أو رقم الهوية الوطنية، أو تاريخ الميلاد، أو أي معلومات بيومترية.',
  },
  privacy_s4_title: { en: 'Personal Preferences', ar: 'التفضيلات الشخصية' },
  privacy_s4_p1: {
    en: 'If you choose to personalise your Yourdis experience, you may optionally provide preferences such as your preferred fragrance families or gender. This information is used exclusively to tailor product recommendations within the app.',
    ar: 'إذا اخترت تخصيص تجربتك في يوردس، يمكنك اختيارياً تقديم تفضيلات مثل عائلات العطور المفضلة أو الجنس. تُستخدم هذه المعلومات حصراً لتخصيص توصيات المنتجات داخل التطبيق.',
  },
  privacy_s4_highlight: {
    en: 'We do not track your physical location at any time. Yourdis does not request, access, or store your GPS or device location data.',
    ar: 'لا نتتبع موقعك الجغرافي في أي وقت. لا يطلب يوردس أو يصل إلى أو يخزن بيانات موقع GPS أو موقع جهازك.',
  },
  privacy_s5_title: { en: 'Push Notifications', ar: 'الإشعارات الفورية' },
  privacy_s5_p1: {
    en: 'Push notifications are entirely optional. We only send notifications if you explicitly enable them and specifically request them for a feature such as price drop alerts or product restock updates.',
    ar: 'الإشعارات الفورية اختيارية تماماً. نرسل الإشعارات فقط إذا قمت بتفعيلها صراحةً وطلبتها تحديداً لميزة مثل تنبيهات انخفاض الأسعار أو تحديثات توفر المنتج.',
  },
  privacy_s5_p2: {
    en: 'You can disable notifications at any time through your device settings or within the app. We do not use push notification infrastructure to collect device identifiers for tracking purposes.',
    ar: 'يمكنك تعطيل الإشعارات في أي وقت عبر إعدادات جهازك أو داخل التطبيق. لا نستخدم بنية الإشعارات لجمع معرّفات الجهاز لأغراض التتبع.',
  },
  privacy_s6_title: { en: 'Cashback Wallet and Withdrawal', ar: 'محفظة الاسترداد النقدي والسحب' },
  privacy_s6_p1: {
    en: 'When you make a purchase through a Yourdis affiliate link, we credit 2% of the purchase value to your in-app wallet. This cashback is funded entirely by Yourdis and is not deducted from your purchase price.',
    ar: 'عند إجراء عملية شراء عبر رابط تابع ليوردس، نضيف 2% من قيمة الشراء إلى محفظتك داخل التطبيق. هذا الاسترداد النقدي يموّله يوردس بالكامل ولا يُخصم من سعر الشراء.',
  },
  privacy_s6_p2: { en: 'You have two options for your wallet balance:', ar: 'لديك خياران لرصيد محفظتك:' },
  privacy_s6_li1: {
    en: 'Withdraw to your bank account — you may provide your bank account details to receive a transfer. This information is used solely to process your withdrawal.',
    ar: 'السحب إلى حسابك البنكي — يمكنك تقديم تفاصيل حسابك البنكي لاستقبال تحويل. تُستخدم هذه المعلومات فحسب لمعالجة عملية السحب.',
  },
  privacy_s6_li2: {
    en: 'Use as store credit — keep your balance in the wallet and use it as discount coupons on future purchases from partnered stores.',
    ar: 'الاستخدام كرصيد في المتجر — احتفظ برصيدك في المحفظة واستخدمه كقسائم خصم على مشتريات قادمة من المتاجر المشاركة.',
  },
  privacy_s6_p3: {
    en: 'We do not store complete bank account numbers in plain text. Withdrawal information is handled securely and used for no other purpose.',
    ar: 'لا نخزن أرقام الحسابات البنكية الكاملة بنص عادي. يُعالَج معلومات السحب بأمان ولا تُستخدم لأي غرض آخر.',
  },
  privacy_s7_title: { en: 'How We Use Your Data', ar: 'كيف نستخدم بياناتك' },
  privacy_s7_p1: { en: 'We use the data we collect only for the following purposes:', ar: 'نستخدم البيانات التي نجمعها فقط للأغراض التالية:' },
  privacy_s7_li1: { en: 'Providing and operating the Yourdis service.', ar: 'تقديم خدمة يوردس وتشغيلها.' },
  privacy_s7_li2: { en: 'Creating and managing your account.', ar: 'إنشاء حسابك وإدارته.' },
  privacy_s7_li3: {
    en: 'Personalising product recommendations based on preferences you have explicitly set.',
    ar: 'تخصيص توصيات المنتجات بناءً على التفضيلات التي حددتها صراحةً.',
  },
  privacy_s7_li4: {
    en: 'Sending you price alerts and notifications you have opted into.',
    ar: 'إرسال تنبيهات الأسعار والإشعارات التي اشتركت فيها.',
  },
  privacy_s7_li5: {
    en: 'Processing cashback credits and wallet withdrawals.',
    ar: 'معالجة قيود الاسترداد النقدي وعمليات سحب المحفظة.',
  },
  privacy_s7_li6: {
    en: 'Improving the app based on aggregated, anonymised usage patterns.',
    ar: 'تحسين التطبيق بناءً على أنماط الاستخدام المجمّعة والمجهولة الهوية.',
  },
  privacy_s7_li7: {
    en: 'Complying with applicable laws and regulations.',
    ar: 'الامتثال للقوانين والأنظمة المعمول بها.',
  },
  privacy_s7_p2: {
    en: 'We do not sell your personal data to any third party. We do not use your data for advertising profiling or targeted advertising on behalf of any third party.',
    ar: 'لا نبيع بياناتك الشخصية لأي طرف ثالث. لا نستخدم بياناتك لإنشاء ملفات إعلانية أو إعلانات مستهدفة لصالح أي طرف ثالث.',
  },
  privacy_s8_title: { en: 'Third-Party Sign-In Providers', ar: 'مزودو تسجيل الدخول من جهات خارجية' },
  privacy_s8_p1: {
    en: 'When you sign in using Google or Apple, these services authenticate your identity and share only your email address and display name with us. We do not receive your password, contacts, or any other data held by these providers. Their own privacy policies govern how they handle your data:',
    ar: 'عند تسجيل الدخول عبر Google أو Apple، تقوم هذه الخدمات بالتحقق من هويتك وتشاركنا فقط عنوان بريدك الإلكتروني واسم عرضك. لا نتلقى كلمة مرورك أو جهات اتصالك أو أي بيانات أخرى يحتفظ بها هؤلاء المزودون. تحكم سياسات الخصوصية الخاصة بهم كيفية تعاملهم مع بياناتك:',
  },
  privacy_s9_title: { en: 'Community and Peer-to-Peer Sales', ar: 'المجتمع والمبيعات بين الأعضاء' },
  privacy_s9_p1: {
    en: 'The Yourdis community is a space for fragrance lovers to ask questions, share knowledge, and connect with others. Users may also list used fragrances for sale within the community.',
    ar: 'مجتمع يوردس فضاء لعشاق العطور لطرح الأسئلة وتبادل المعرفة والتواصل مع الآخرين. يمكن للمستخدمين أيضاً عرض عطورهم المستعملة للبيع داخل المجتمع.',
  },
  privacy_s9_p2: {
    en: 'Community posts and your public display name are visible to other users. Please do not post any personal data (such as your phone number or home address) in public community posts.',
    ar: 'منشورات المجتمع واسم عرضك العام مرئية للمستخدمين الآخرين. يُرجى عدم نشر أي بيانات شخصية (مثل رقم هاتفك أو عنوان منزلك) في منشورات المجتمع العامة.',
  },
  privacy_s10_title: { en: 'Data Retention', ar: 'الاحتفاظ بالبيانات' },
  privacy_s10_p1: {
    en: 'We retain your personal data only for as long as your account is active or as needed to provide you with our services. If you delete your account, we will delete your personal data within 30 days, except where retention is required by applicable law.',
    ar: 'نحتفظ ببياناتك الشخصية فقط طالما حسابك نشطاً أو بقدر ما هو ضروري لتقديم خدماتنا. إذا حذفت حسابك، سنحذف بياناتك الشخصية في غضون 30 يوماً، إلا عندما يكون الاحتفاظ مطلوباً بموجب القانون المعمول به.',
  },
  privacy_s11_title: { en: 'Your Rights Under Saudi PDPL', ar: 'حقوقك بموجب نظام حماية البيانات السعودي' },
  privacy_s11_p1: {
    en: 'In accordance with Saudi Arabia\'s Personal Data Protection Law, you have the right to:',
    ar: 'وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية، يحق لك:',
  },
  privacy_s11_li1: { en: 'Access your personal data held by Yourdis.', ar: 'الوصول إلى بياناتك الشخصية التي يحتفظ بها يوردس.' },
  privacy_s11_li2: { en: 'Request correction of inaccurate or incomplete data.', ar: 'طلب تصحيح البيانات غير الدقيقة أو غير المكتملة.' },
  privacy_s11_li3: {
    en: 'Request deletion of your personal data, subject to legal requirements.',
    ar: 'طلب حذف بياناتك الشخصية، مع مراعاة المتطلبات القانونية.',
  },
  privacy_s11_li4: {
    en: 'Withdraw consent for optional data processing at any time.',
    ar: 'سحب موافقتك على معالجة البيانات الاختيارية في أي وقت.',
  },
  privacy_s11_li5: {
    en: 'Lodge a complaint with the Saudi Authority for Data and Artificial Intelligence (SDAIA).',
    ar: 'تقديم شكوى إلى هيئة البيانات والذكاء الاصطناعي (سدايا).',
  },
  privacy_s11_p2: {
    en: 'To exercise any of these rights, please contact us at the address below.',
    ar: 'لممارسة أي من هذه الحقوق، يُرجى التواصل معنا على العنوان أدناه.',
  },
  privacy_s12_title: { en: 'Security', ar: 'الأمان' },
  privacy_s12_p1: {
    en: 'We apply appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction. We use industry-standard encryption for data in transit and at rest.',
    ar: 'نطبّق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. نستخدم تشفيراً وفق معايير الصناعة للبيانات أثناء النقل وفي حالة التخزين.',
  },
  privacy_s13_title: { en: 'Changes to This Policy', ar: 'التغييرات على هذه السياسة' },
  privacy_s13_p1: {
    en: 'We may update this Privacy Policy from time to time. When we make material changes, we will notify you through the app or by email. The updated policy will always be available at yourdis.com with its effective date.',
    ar: 'قد نحدّث سياسة الخصوصية هذه من وقت لآخر. عند إجراء تغييرات جوهرية، سنخطرك عبر التطبيق أو البريد الإلكتروني. ستكون السياسة المحدَّثة متاحة دائماً على yourdis.com مع تاريخ سريانها.',
  },
  privacy_contact_q: {
    en: 'Questions about this Privacy Policy?',
    ar: 'لديك أسئلة حول سياسة الخصوصية؟',
  },
  privacy_s8_google_link: { en: 'Google Privacy Policy', ar: 'سياسة خصوصية Google' },
  privacy_s8_apple_link: { en: 'Apple Privacy Policy', ar: 'سياسة خصوصية Apple' },

  // ─── Terms of Service ─────────────────────────────────────────

  terms_title: { en: 'Terms of Service', ar: 'شروط الخدمة' },
  terms_intro: {
    en: 'These Terms of Service govern your use of the Yourdis application and website. By accessing or using Yourdis, you agree to be bound by these Terms. Please read them carefully. If you do not agree, please do not use the service.',
    ar: 'تحكم شروط الخدمة هذه استخدامك لتطبيق يوردس وموقعه الإلكتروني. بالوصول إلى يوردس أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. يُرجى قراءتها بعناية. إذا كنت لا توافق عليها، يُرجى عدم استخدام الخدمة.',
  },
  terms_s1_title: { en: 'What Yourdis Is', ar: 'ما هو يوردس' },
  terms_s1_p1: {
    en: 'Yourdis is a perfume price comparison platform. We aggregate and display fragrance prices from verified third-party retailers operating in Saudi Arabia, allowing users to compare prices and navigate to the retailer of their choice to complete a purchase.',
    ar: 'يوردس منصة لمقارنة أسعار العطور. نجمع أسعار العطور من متاجر تجزئة موثوقة تابعة لجهات خارجية تعمل في السعودية ونعرضها، مما يتيح للمستخدمين مقارنة الأسعار والانتقال إلى المتجر الذي يختارونه لإتمام الشراء.',
  },
  terms_s1_highlight: {
    en: 'Yourdis is not a retailer. We do not sell, ship, or handle any products. All purchases are made directly between the user and the retailer on the retailer\'s own website.',
    ar: 'يوردس ليس متجراً. لا نبيع أو نشحن أو نتولى أي منتجات. تُجرى جميع عمليات الشراء مباشرةً بين المستخدم والمتجر على موقع المتجر الخاص به.',
  },
  terms_s2_title: { en: 'Eligibility', ar: 'أهلية الاستخدام' },
  terms_s2_p1: {
    en: 'You may use Yourdis if you are at least 18 years old or have the consent of a parent or legal guardian. By using the service, you confirm that the information you provide is accurate.',
    ar: 'يمكنك استخدام يوردس إذا كان عمرك 18 عاماً على الأقل أو حصلت على موافقة أحد الوالدين أو الوصي القانوني. باستخدامك للخدمة، فإنك تؤكد أن المعلومات التي تقدمها دقيقة.',
  },
  terms_s3_title: { en: 'Your Account', ar: 'حسابك' },
  terms_s3_p1: {
    en: 'You may browse Yourdis as a guest without creating an account. An account is required to access features such as saving favourites, setting price alerts, chatting with Accord AI, participating in the community, and using the cashback wallet.',
    ar: 'يمكنك تصفح يوردس كضيف دون إنشاء حساب. الحساب مطلوب للوصول إلى ميزات مثل حفظ المفضلة، وضبط تنبيهات الأسعار، والتحدث مع أكورد AI، والمشاركة في المجتمع، واستخدام محفظة الاسترداد النقدي.',
  },
  terms_s3_p2: {
    en: 'Registration via email uses a one-time verification code (OTP) sent to your email address — no password is created. You may also register using Sign in with Google or Sign in with Apple.',
    ar: 'يستخدم التسجيل عبر البريد الإلكتروني رمز تحقق لمرة واحدة (OTP) يُرسل إلى بريدك الإلكتروني — ولا تُنشأ أي كلمة مرور. يمكنك أيضاً التسجيل عبر Google أو Apple.',
  },
  terms_s3_p3: {
    en: 'You are responsible for maintaining the confidentiality of your account and for all activity that occurs under it. If you believe your account has been compromised, contact us immediately.',
    ar: 'أنت مسؤول عن الحفاظ على سرية حسابك وعن جميع الأنشطة التي تجري تحته. إذا اعتقدت أن حسابك قد تعرض للاختراق، تواصل معنا فوراً.',
  },
  terms_s4_title: { en: 'Cashback Programme', ar: 'برنامج الاسترداد النقدي' },
  terms_s4_p1: {
    en: 'When you click a purchase link on Yourdis and complete a qualifying purchase on a partner retailer\'s website, we earn an affiliate commission from that retailer. We pass a fixed portion of this — 2% of the purchase value — back to you as cashback credited to your in-app wallet.',
    ar: 'عند نقرك على رابط شراء في يوردس وإتمام عملية شراء مؤهلة على موقع أحد متاجر الشركاء، نكسب عمولة تابعة من ذلك المتجر. نعيد نسبة ثابتة منها — 2% من قيمة الشراء — إليك كاسترداد نقدي يُضاف إلى محفظتك داخل التطبيق.',
  },
  terms_s4_li1: {
    en: 'The 2% cashback rate is fixed and is guaranteed by Yourdis regardless of the commission rate we receive from any individual store.',
    ar: 'نسبة الاسترداد النقدي البالغة 2% ثابتة ومضمونة من يوردس بصرف النظر عن نسبة العمولة التي نتلقاها من أي متجر بعينه.',
  },
  terms_s4_li2: {
    en: 'Cashback is credited after the retailer confirms the purchase. This may take several days depending on the retailer\'s reporting cycle.',
    ar: 'يُضاف الاسترداد النقدي بعد أن يؤكد المتجر عملية الشراء. قد يستغرق ذلك عدة أيام اعتماداً على دورة تقارير المتجر.',
  },
  terms_s4_li3: {
    en: 'Cashback is not earned on purchases that are subsequently cancelled or returned.',
    ar: 'لا يُكسب الاسترداد النقدي على المشتريات التي يُلغى طلبها أو يُعاد لاحقاً.',
  },
  terms_s4_li4: {
    en: 'Your balance may be withdrawn to a bank account or used as store credit. Yourdis reserves the right to set a minimum withdrawal amount, which will be clearly communicated in the app.',
    ar: 'يمكن سحب رصيدك إلى حساب بنكي أو استخدامه كرصيد في المتجر. يحتفظ يوردس بالحق في تحديد حد أدنى للسحب، سيُعلَن بوضوح في التطبيق.',
  },
  terms_s4_li5: {
    en: 'Yourdis reserves the right to modify or terminate the cashback programme with reasonable notice.',
    ar: 'يحتفظ يوردس بالحق في تعديل برنامج الاسترداد النقدي أو إنهائه مع إشعار معقول.',
  },
  terms_s5_title: { en: 'Price Information', ar: 'معلومات الأسعار' },
  terms_s5_p1: {
    en: 'We display prices sourced directly from our partner retailers via their data feeds. We aim to keep this information accurate and up to date. However, prices and availability can change rapidly, and the price displayed on a retailer\'s website at the time of purchase is the price you will pay.',
    ar: 'نعرض أسعاراً مصدرها مباشرةً من متاجر شركائنا عبر بيانات مشاركتهم. نسعى إلى الحفاظ على دقة هذه المعلومات وتحديثها. ومع ذلك، يمكن أن تتغير الأسعار والتوفر بسرعة، والسعر المعروض على موقع المتجر وقت الشراء هو السعر الذي ستدفعه.',
  },
  terms_s5_p2: {
    en: 'Yourdis is not responsible for any discrepancy between a price shown on our platform and the price charged by the retailer.',
    ar: 'يوردس غير مسؤول عن أي تناقض بين السعر المعروض على منصتنا والسعر الذي يتقاضاه المتجر.',
  },
  terms_s6_title: { en: 'Community Guidelines', ar: 'إرشادات المجتمع' },
  terms_s6_p1: {
    en: 'The Yourdis community is a space for fragrance lovers to exchange knowledge, ask questions, and connect with others. When participating in the community, you agree not to:',
    ar: 'مجتمع يوردس فضاء لعشاق العطور لتبادل المعرفة وطرح الأسئلة والتواصل مع الآخرين. بالمشاركة في المجتمع، توافق على عدم:',
  },
  terms_s6_li1: { en: 'Post content that is defamatory, abusive, threatening, or harassing.', ar: 'نشر محتوى مسيء أو تشهيري أو مهدِّد أو مضايِق.' },
  terms_s6_li2: { en: 'Impersonate any person or entity.', ar: 'انتحال شخصية أي شخص أو كيان.' },
  terms_s6_li3: { en: 'Post spam, unsolicited advertisements, or repetitive content.', ar: 'نشر محتوى مزعج أو إعلانات غير مرغوب فيها أو محتوى متكرر.' },
  terms_s6_li4: {
    en: 'Share content that infringes any third party\'s intellectual property rights.',
    ar: 'مشاركة محتوى ينتهك حقوق الملكية الفكرية لأي طرف ثالث.',
  },
  terms_s6_li5: { en: 'Post false or misleading information about any product or seller.', ar: 'نشر معلومات كاذبة أو مضللة حول أي منتج أو بائع.' },
  terms_s6_p2: {
    en: 'Yourdis reserves the right to remove any content that violates these guidelines and to suspend or terminate accounts that repeatedly breach them.',
    ar: 'يحتفظ يوردس بالحق في إزالة أي محتوى ينتهك هذه الإرشادات وتعليق الحسابات أو إنهائها التي تنتهكها بشكل متكرر.',
  },
  terms_s7_title: { en: 'Peer-to-Peer Sales of Used Fragrances', ar: 'البيع بين الأعضاء للعطور المستعملة' },
  terms_s7_p1: {
    en: 'Yourdis provides a community space where users may list used fragrances for sale. This is a free service — Yourdis charges no commissions and no fees on any sale made between community members.',
    ar: 'يوفر يوردس فضاءً مجتمعياً يمكن للمستخدمين فيه عرض العطور المستعملة للبيع. هذه خدمة مجانية — لا يتقاضى يوردس أي عمولات أو رسوم على أي عملية بيع تجري بين أعضاء المجتمع.',
  },
  terms_s7_warning: {
    en: 'Yourdis has absolutely no involvement in peer-to-peer transactions. All sales occur directly and exclusively between the buyer and the seller. Yourdis is not a party to any such transaction and assumes no liability whatsoever for any disputes, losses, damages, fraud, non-delivery, misrepresentation, or any other matter arising from or relating to community sales. Users engage in peer-to-peer transactions entirely at their own risk.',
    ar: 'يوردس ليس له أي دور في المعاملات بين الأعضاء. تجري جميع عمليات البيع مباشرةً وحصراً بين المشتري والبائع. يوردس ليس طرفاً في أي معاملة من هذا القبيل ولا يتحمل أي مسؤولية عن أي نزاعات أو خسائر أو أضرار أو احتيال أو عدم تسليم أو تحريف أو أي مسألة أخرى ناشئة عن عمليات البيع المجتمعية أو مرتبطة بها. يشارك المستخدمون في المعاملات بين الأعضاء على مسؤوليتهم الخاصة بالكامل.',
  },
  terms_s7_p2: {
    en: 'We strongly recommend that you exercise caution when buying or selling within the community. Verify the identity of the other party where possible and use secure, traceable payment methods.',
    ar: 'نوصي بشدة بتوخي الحذر عند الشراء أو البيع داخل المجتمع. تحقق من هوية الطرف الآخر حيثما أمكن واستخدم طرق دفع آمنة وقابلة للتتبع.',
  },
  terms_s8_title: { en: 'Accord AI', ar: 'أكورد AI' },
  terms_s8_p1: {
    en: 'Accord AI is an AI-powered fragrance assistant available within the app. It is designed to help you discover fragrances, understand scent profiles, and find the best prices.',
    ar: 'أكورد AI مساعد عطور مدعوم بالذكاء الاصطناعي متاح داخل التطبيق. تم تصميمه لمساعدتك في اكتشاف العطور وفهم ملامح الرائحة وإيجاد أفضل الأسعار.',
  },
  terms_s8_p2: {
    en: 'Accord AI responses are generated automatically and are provided for informational and recommendation purposes only. They should not be taken as professional advice. Yourdis makes no representations or warranties as to the accuracy or completeness of any AI-generated response.',
    ar: 'تُنتَج ردود أكورد AI تلقائياً وتُقدَّم لأغراض إعلامية وتوصية فحسب. لا ينبغي اعتبارها نصيحة متخصصة. لا يقدم يوردس أي إقرارات أو ضمانات بشأن دقة أو اكتمال أي رد يُنتَج بالذكاء الاصطناعي.',
  },
  terms_s9_title: { en: 'Intellectual Property', ar: 'الملكية الفكرية' },
  terms_s9_p1: {
    en: 'All content on the Yourdis platform — including the Yourdis name, logo, design, text, fragrance data compiled by our team, and software — is the property of Yourdis and is protected under applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of the platform without our express written permission.',
    ar: 'جميع المحتويات على منصة يوردس — بما في ذلك اسم يوردس والشعار والتصميم والنصوص وبيانات العطور التي جمعها فريقنا والبرمجيات — هي ملك ليوردس ومحمية بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك نسخ أو استنساخ أو توزيع أو إنشاء أعمال مشتقة من أي جزء من المنصة دون إذن خطي صريح منا.',
  },
  terms_s9_p2: {
    en: 'Fragrance brand names, product names, and images belong to their respective owners and are used for identification and informational purposes only. Yourdis is not affiliated with or endorsed by any fragrance brand unless explicitly stated.',
    ar: 'أسماء دور العطور والمنتجات والصور تعود لأصحابها المعنيين وتُستخدم لأغراض التعريف والإعلام فحسب. يوردس غير تابع لأي دار عطور ولم تُوصِ به إلا إذا ذُكر ذلك صراحةً.',
  },
  terms_s10_title: { en: 'Limitation of Liability', ar: 'تحديد المسؤولية' },
  terms_s10_p1: {
    en: 'To the fullest extent permitted by applicable law, Yourdis shall not be liable for:',
    ar: 'بالقدر الأقصى المسموح به بموجب القانون المعمول به، لن يكون يوردس مسؤولاً عن:',
  },
  terms_s10_li1: {
    en: 'Any products purchased through retailers linked from our platform, including issues of quality, authenticity, delivery, or returns.',
    ar: 'أي منتجات تُشترى عبر المتاجر المرتبطة بمنصتنا، بما في ذلك مشكلات الجودة أو الأصالة أو التوصيل أو الإرجاع.',
  },
  terms_s10_li2: {
    en: 'Any disputes, financial losses, or damages arising from peer-to-peer transactions between community members.',
    ar: 'أي نزاعات أو خسائر مالية أو أضرار ناشئة عن المعاملات بين أعضاء المجتمع.',
  },
  terms_s10_li3: {
    en: 'Temporary unavailability of the service due to technical maintenance or circumstances outside our control.',
    ar: 'عدم توفر الخدمة مؤقتاً بسبب الصيانة التقنية أو ظروف خارجة عن إرادتنا.',
  },
  terms_s10_li4: {
    en: 'Inaccuracies in prices or stock information sourced from third-party retailers.',
    ar: 'عدم دقة الأسعار أو معلومات المخزون المصدرة من متاجر تجزئة تابعة لجهات خارجية.',
  },
  terms_s11_title: { en: 'Termination', ar: 'الإنهاء' },
  terms_s11_p1: {
    en: 'You may delete your account at any time from within the app. Upon deletion, your personal data will be removed in accordance with our Privacy Policy.',
    ar: 'يمكنك حذف حسابك في أي وقت من داخل التطبيق. عند الحذف، ستُزال بياناتك الشخصية وفقاً لسياسة الخصوصية الخاصة بنا.',
  },
  terms_s11_p2: {
    en: 'Yourdis reserves the right to suspend or terminate your access if you breach these Terms, engage in fraudulent activity, or otherwise misuse the platform.',
    ar: 'يحتفظ يوردس بالحق في تعليق وصولك أو إنهائه إذا انتهكت هذه الشروط أو مارست أنشطة احتيالية أو أسأت استخدام المنصة بأي شكل آخر.',
  },
  terms_s12_title: { en: 'Governing Law', ar: 'القانون الحاكم' },
  terms_s12_p1: {
    en: 'These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from your use of Yourdis shall be subject to the exclusive jurisdiction of the competent courts of the Kingdom of Saudi Arabia.',
    ar: 'تحكم هذه الشروط قوانين المملكة العربية السعودية. تخضع أي نزاعات ناشئة عن استخدامك ليوردس للاختصاص القضائي الحصري للمحاكم المختصة في المملكة العربية السعودية.',
  },
  terms_s13_title: { en: 'Changes to These Terms', ar: 'التغييرات على هذه الشروط' },
  terms_s13_p1: {
    en: 'We may update these Terms from time to time. When we make material changes, we will notify you through the app or by email at least 14 days before the changes take effect. Continued use of Yourdis after the effective date constitutes your acceptance of the updated Terms.',
    ar: 'قد نحدّث هذه الشروط من وقت لآخر. عند إجراء تغييرات جوهرية، سنخطرك عبر التطبيق أو البريد الإلكتروني قبل 14 يوماً على الأقل من سريان التغييرات. استمرارك في استخدام يوردس بعد تاريخ السريان يُعدّ قبولاً منك للشروط المحدَّثة.',
  },
  terms_contact_q: { en: 'Questions about these Terms?', ar: 'لديك أسئلة حول هذه الشروط؟' },

  // ─── Contact Page ─────────────────────────────────────────────

  contact_label: { en: 'CONTACT', ar: 'تواصل معنا' },
  contact_title: { en: 'Contact Us', ar: 'تواصل معنا' },
  contact_sub: {
    en: 'We\'d love to hear from you. Choose the topic that best fits your message and we\'ll make sure it reaches the right person.',
    ar: 'يسعدنا سماعك. اختر الموضوع الذي يناسب رسالتك وسنوصلها إلى الشخص المناسب.',
  },
  contact_intro: {
    en: 'All enquiries are handled through a single inbox. Tap any card to open your email app with the subject line pre-filled.',
    ar: 'تُعالَج جميع الاستفسارات عبر صندوق بريد واحد. اضغط على أي بطاقة لفتح تطبيق البريد مع سطر الموضوع جاهزاً.',
  },
  contact_card1_title: { en: 'General Support', ar: 'الدعم العام' },
  contact_card1_desc: {
    en: 'Questions about the app, your account, cashback wallet, or anything else.',
    ar: 'أسئلة حول التطبيق، حسابك، محفظة الاسترداد النقدي، أو أي شيء آخر.',
  },
  contact_card2_title: { en: 'Store Partnership', ar: 'شراكة المتاجر' },
  contact_card2_desc: {
    en: 'Want to list your store on Yourdis and reach fragrance buyers across Saudi Arabia?',
    ar: 'هل تريد إدراج متجرك في يوردس والوصول إلى مشتري العطور في السعودية؟',
  },
  contact_card3_title: { en: 'Press & Media', ar: 'الإعلام والصحافة' },
  contact_card3_desc: {
    en: 'Media enquiries, interview requests, or information about Yourdis for publications.',
    ar: 'استفسارات إعلامية، طلبات مقابلات، أو معلومات عن يوردس للمنشورات.',
  },
  contact_card4_title: { en: 'Privacy & Legal', ar: 'الخصوصية والشؤون القانونية' },
  contact_card4_desc: {
    en: 'Questions about our Privacy Policy, data requests, or legal matters.',
    ar: 'أسئلة حول سياسة الخصوصية، طلبات البيانات، أو الشؤون القانونية.',
  },

};

// ─── Stores ───────────────────────────────────────────────────
// Each entry: { ar: 'Arabic name', en: 'English name' }
// Used by the marquee builder in index.html.

const stores = [
  { ar: 'عاشق العطور',          en: 'Aashiq Al Oud' },
  { ar: 'نجد العذية',            en: 'Najd Al Athiyah' },
  { ar: 'بي أو ون',             en: 'PO One' },
  { ar: 'لوجا',                  en: 'Loja' },
  { ar: 'ديفاين',               en: 'Define' },
  { ar: 'عبق',                   en: 'Abaq' },
  { ar: 'كاندي نيش',            en: 'Candy Niche' },
  { ar: 'سارا ميك اب',          en: 'Sara Makeup' },
  { ar: 'السلطان للعطور',       en: 'Sultan Perfumes' },
  { ar: 'خبير العطور',          en: 'Al Khabeer Perfumes' },
  { ar: 'فانيلا',               en: 'Vanilla' },
  { ar: 'عطور لابريزا',         en: 'La Brezza Perfumes' },
  { ar: 'عطور نوبلز سينت',      en: 'Nobles Scent' },
  { ar: 'يور فرايغرينس',        en: 'Your Fragrance' },
  { ar: 'عطور متجر بقشان',      en: 'Bgshan Perfumes' },
  { ar: 'عطور سيمفوني پيرفيوم', en: 'Symphony Perfumes' },
  { ar: 'عطور نفحات عطرية ٢١',  en: 'Nafahat 21' },
  { ar: 'عطور عالم جيڤينشي',    en: 'Givenchy World Perfumes' },
  { ar: 'لاروميوس',             en: 'Laromious' },
  { ar: 'عطور متجر المتنبي',    en: 'Al Mutanabbi Perfumes' },
  { ar: 'بيلان للعطور',         en: 'Bilan Perfumes' },
  { ar: 'ريسان للعطور',         en: 'Ressan Perfumes' },
];
