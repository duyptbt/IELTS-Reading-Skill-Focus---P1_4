import {
  VocabularyItem,
  GrammarStructureItem,
  ParaphrasePair,
  MatchingTaskItem,
  GapFillTaskItem,
  ReferenceTaskItem,
  TransformationTaskItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: VocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Locomotion',
    phonetic: '/ˌləʊ.kəˈməʊ.ʃən/',
    partOfSpeech: 'noun [uncountable]',
    definition: 'Movement or the ability to move from one place to another.',
    definitionVi: 'Sự vận động, khả năng di chuyển từ nơi này sang nơi khác của động vật.',
    passageContext: 'It has a deep broad tail and powerful leg muscles to aid locomotion.',
    paragraphRef: 4,
    collocations: ['aid locomotion', 'bipedal locomotion', 'means of locomotion', 'quadrupedal locomotion'],
    synonyms: ['movement', 'mobility', 'motion', 'travel', 'ambulation'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-2',
    word: 'Computational',
    phonetic: '/ˌkɒm.pjʊˈteɪ.ʃən.əl/',
    partOfSpeech: 'adjective',
    definition: 'Involving, calculated by, or relating to computers and mathematical calculations.',
    definitionVi: 'Thuộc về điện toán, tính toán bằng máy tính.',
    passageContext: '...because he is a new kind of palaeontologist: a computational palaeontologist.',
    paragraphRef: 1,
    collocations: ['computational techniques', 'computational model', 'computational power', 'computational biology'],
    synonyms: ['computerised', 'digital', 'algorithmic', 'cybernetic'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-3',
    word: 'Counterpart',
    phonetic: '/ˈkaʊn.tə.pɑːt/',
    partOfSpeech: 'noun [countable]',
    definition: 'A person or thing that has the same purpose or position as another in a different system, period, or group.',
    definitionVi: 'Bản sao đối ứng, sinh vật/vật thể tương đương ở một thời kỳ hoặc hệ thống khác.',
    passageContext: '...the modelled animal should be moving in a manner similar to its now-extinct counterpart.',
    paragraphRef: 3,
    collocations: ['extinct counterpart', 'modern-day counterpart', 'living counterpart', 'biological counterpart'],
    synonyms: ['equivalent', 'parallel', 'match', 'peer', 'correlative'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-4',
    word: 'Prevalent',
    phonetic: '/ˈprev.əl.ənt/',
    partOfSpeech: 'adjective',
    definition: 'Existing commonly, widespread, or generally accepted in a particular area or at a particular time.',
    definitionVi: 'Phổ biến, thịnh hành, chiếm ưu thế rộng rãi.',
    passageContext: 'The application of computational techniques in palaeontology is becoming more prevalent every year.',
    paragraphRef: 7,
    collocations: ['become more prevalent', 'widely prevalent', 'increasingly prevalent', 'prevalent practice'],
    synonyms: ['widespread', 'pervasive', 'ubiquitous', 'commonplace', 'rampant'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-5',
    word: 'Speculate',
    phonetic: '/ˈspek.jə.leɪt/',
    partOfSpeech: 'verb [intransitive / transitive]',
    definition: 'To form opinions or theories about a subject without possessing firm evidence.',
    definitionVi: 'Suy đoán, phỏng đoán khi chưa có đầy đủ bằng chứng xác thực.',
    passageContext: 'It is not really known why they are there but scientists have speculated they could have supported a hump...',
    paragraphRef: 4,
    collocations: ['speculate on / about', 'scientists speculate that', 'widely speculated', 'speculate as to whether'],
    synonyms: ['hypothesise', 'conjecture', 'theorise', 'postulate', 'surmise'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-6',
    word: 'Staggering',
    phonetic: '/ˈstæɡ.ər.ɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Deeply shocking, astonishing, or overwhelmingly large in magnitude.',
    definitionVi: 'Gây kinh ngạc, khổng lồ đến mức choáng ngợp.',
    passageContext: 'Experiments can answer these questions but the number of variables is staggering.',
    paragraphRef: 5,
    collocations: ['staggering number', 'staggering amount', 'staggering complexity', 'staggering challenge'],
    synonyms: ['astounding', 'overwhelming', 'breathtaking', 'immense', 'colossal'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-7',
    word: 'Consistency',
    phonetic: '/kənˈsɪs.tən.si/',
    partOfSpeech: 'noun [countable / uncountable]',
    definition: 'The physical quality of being thick, smooth, firm, or resistant to flow; texture and density.',
    definitionVi: 'Độ đặc quánh, kết cấu cơ học và mật độ của vật chất mềm (như bùn, đất).',
    passageContext: 'Falkingham uses computational techniques to model a volume of mud and control the moisture content, consistency, and other conditions...',
    paragraphRef: 6,
    collocations: ['mud consistency', 'texture and consistency', 'uniform consistency', 'soil consistency'],
    synonyms: ['thickness', 'texture', 'viscosity', 'density', 'firmness'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-8',
    word: 'Simultaneously',
    phonetic: '/ˌsɪm.əlˈteɪ.ni.əs.li/',
    partOfSpeech: 'adverb',
    definition: 'Happening, being done, or existing at exactly the same time.',
    definitionVi: 'Đồng thời, cùng một lúc trên diện rộng.',
    passageContext: 'By running hundreds of these simulations simultaneously on supercomputers...',
    paragraphRef: 6,
    collocations: ['run simultaneously', 'occur simultaneously', 'simultaneously compute', 'simultaneously execute'],
    synonyms: ['concurrently', 'at the same time', 'synchronously', 'in parallel'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-9',
    word: 'Proportion',
    phonetic: '/prəˈpɔː.ʃən/',
    partOfSpeech: 'noun [countable / uncountable]',
    definition: 'The comparative harmonious relation of one part to another or to the whole in terms of size, shape, or scale.',
    definitionVi: 'Tỷ lệ tương quan kích thước, sự cân đối về hình thể giữa các bộ phận.',
    passageContext: 'The skull seems out of proportion with its thick, heavy body because it is so narrow...',
    paragraphRef: 4,
    collocations: ['out of proportion with', 'in proportion to', 'sense of proportion', 'relative proportion'],
    synonyms: ['balance', 'symmetry', 'ratio', 'correlation', 'scale'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-10',
    word: 'Sediment',
    phonetic: '/ˈsed.ɪ.mənt/',
    partOfSpeech: 'noun [countable / uncountable]',
    definition: 'Matter that settles to the bottom of a liquid, or mineral matter deposited by water, wind, or glaciers.',
    definitionVi: 'Trầm tích, bùn lắng đọng qua hàng triệu năm.',
    passageContext: 'A crucial consideration is knowing what the environment including the mud, or sediment, upon which the animal walked was like...',
    paragraphRef: 5,
    collocations: ['mud or sediment', 'sediment deposit', 'geological sediment', 'sediment layer'],
    synonyms: ['deposit', 'silt', 'alluvium', 'mud', 'sludge'],
    ieltsBand: 'Band 7.0+',
  },
];

export const CONSOLIDATION_GRAMMAR: GrammarStructureItem[] = [
  {
    id: 'grammar-1',
    name: 'Pseudo-Cleft Sentence for Thematic Contrast & Focus',
    category: 'Information Packaging & Emphasis',
    formula: 'What + [Subject + Verb] + is + [Noun Clause / Infinitive Clause]',
    passageExample:
      'What few people may consider is that uncovering a skeleton, or discovering a new species, is where the research begins, not where it ends.',
    paragraphRef: 2,
    explanation:
      'A pseudo-cleft construction uses a "what"-clause as the grammatical subject to build expectation and place maximum communicative prominence on the following predicate clause.',
    explanationVi:
      'Cấu trúc câu chẻ giả (pseudo-cleft) sử dụng mệnh đề danh ngữ mở đầu bằng "What..." làm chủ ngữ để tạo điểm nhấn tu từ mạnh mẽ, thu hút sự chú ý trọn vẹn của người đọc vào vế vị ngữ phía sau.',
    ieltsApplication:
      'Essential in IELTS Writing Task 2 introductions or body paragraph topic sentences to challenge common misconceptions.',
    ieltsApplicationVi:
      'Rất hữu dụng trong bài IELTS Writing Task 2 khi muốn phản biện một quan điểm phổ biến hoặc nhấn mạnh luận điểm then chốt.',
    practiceExample:
      'What researchers frequently overlook is that theoretical calculations must be corroborated by empirical field observations.',
  },
  {
    id: 'grammar-2',
    name: 'Participial Clause Denoting Condition & Assumption',
    category: 'Non-finite Dependent Clauses',
    formula: 'Assuming / Given that + [Clause], [Main Clause with modal verb (should / would / will)]',
    passageExample:
      'Assuming natural selection evolves the best possible solution too, the modelled animal should be moving in a manner similar to its now-extinct counterpart.',
    paragraphRef: 3,
    explanation:
      'An introductory participle clause acting as a conditional adverbial ("Assuming that..."), establishing a scientific hypothesis under which the main outcome is deduced.',
    explanationVi:
      'Mệnh đề phân từ mở đầu câu đóng vai trò như mệnh đề điều kiện ("Giả định rằng..."), thiết lập tiền đề logic khoa học để suy ra kết quả ở mệnh đề chính có chứa động từ khuyết thiếu.',
    ieltsApplication:
      'Allows candidates to express scientific deductions and tentative hypotheses without repetitive "If... then" conditionals.',
    ieltsApplicationVi:
      'Giúp người viết diễn đạt suy luận khoa học và giả thuyết học thuật thanh thoát, tránh lặp lại cấu trúc "If" thông thường.',
    practiceExample:
      'Assuming fossil preservation remains intact under dense sandstone layers, palaeontologists will be able to reconstruct gait patterns.',
  },
  {
    id: 'grammar-3',
    name: 'Fronted Prepositional Gerund for Parallel Comparison',
    category: 'Adverbial Cohesion & Fronting',
    formula: 'By + [Gerund Phrase], [Main Subject + Modal / Verb + Object / Complement]',
    passageExample:
      'By comparing their cyberspace results with real measurements of living species, the Manchester team of palaeontologists can be confident in the results computed...',
    paragraphRef: 3,
    explanation:
      'Fronting the means/method ("By comparing...") highlights scientific rigor before stating the resulting degree of epistemic confidence.',
    explanationVi:
      'Đảo cụm giới từ chỉ phương thức ("By comparing...") lên đầu câu giúp làm nổi bật phương pháp thực nghiệm khoa học trước khi công bố kết luận về mức độ tin cậy.',
    ieltsApplication:
      'Excellent for describing analytical processes in Academic Writing Task 1 and experimental methodologies in Task 2.',
    ieltsApplicationVi:
      'Tuyệt vời cho phần miêu tả tiến trình phân tích dữ liệu ở Task 1 và lý giải phương pháp khoa học ở Task 2.',
    practiceExample:
      'By evaluating digital footprints against contemporary animal tracks, investigators can deduce locomotion kinematics with exceptional precision.',
  },
  {
    id: 'grammar-4',
    name: 'Passive Voice with Modal Auxiliaries for Objective Reporting',
    category: 'Passive Voice & Academic Stance',
    formula: 'Subject + can / could / would + be + [Past Participle] + (by / from + Phrase)',
    passageExample:
      'This footprint can be chopped up and viewed from any angle and stress values can be extracted and calculated from inside it.',
    paragraphRef: 6,
    explanation:
      'Academic texts heavily favour modal passives to describe potential laboratory or computational operations objectively without naming a specific human agent.',
    explanationVi:
      'Văn phong học thuật ưa chuộng thể bị động kết hợp động từ khiếm khuyết ("can be chopped up and viewed", "can be extracted and calculated") để tập trung vào đối tượng nghiên cứu thay vì người thao tác.',
    ieltsApplication:
      'A hallmark of Band 8.0+ Academic Writing when describing experimental procedures or software processing workflows.',
    ieltsApplicationVi:
      'Tiêu chuẩn vàng trong IELTS Writing Task 1 (quy trình Process) và Task 2 khi bàn luận về các giải pháp kỹ thuật.',
    practiceExample:
      'Biomechanical stress contours can be visualized and mapped systematically across simulated substrate surfaces.',
  },
  {
    id: 'grammar-5',
    name: 'Appositive & Explanatory Relative Clauses for Taxonomical Nomenclature',
    category: 'Complex Post-Modification',
    formula: 'It is called [Proper Noun] which literally means [Literal Meaning] because of [Relative Clause]',
    passageExample:
      "It is called an acrocanthosaurus which literally means 'high spined lizard' because of the spines which run along its backbone.",
    paragraphRef: 4,
    explanation:
      'Layered restrictive and non-restrictive relative clauses enable dense etymological clarification alongside anatomical description within a single elegant sentence.',
    explanationVi:
      'Sử dụng mệnh đề quan hệ lồng ghép để vừa giải nghĩa từ nguyên học của tên sinh vật vừa mô tả đặc điểm giải phẫu học trong một câu văn gãy gọn.',
    ieltsApplication:
      'Used for introducing technical definitions, scientific nomenclature, and academic terms seamlessly.',
    ieltsApplicationVi:
      'Hữu ích khi cần định nghĩa thuật ngữ kỹ thuật, giải thích tên gọi hoặc nguồn gốc khái niệm chuyên ngành.',
    practiceExample:
      'The specimen is classified as a theropod, which literally denotes "beast foot" owing to the three-toed morphology of its hind limbs.',
  },
];

export const CONSOLIDATION_PARAPHRASES: ParaphrasePair[] = [
  {
    id: 'para-1',
    originalText: 'field workers camped in the desert in the hot sun, carefully picking away at the rock',
    paraphrasedText: 'rarely spends time on outdoor research these days',
    technique: 'Idiomatic Activity to General Academic Category',
    techniqueVi: 'Chuyển đổi miêu tả hình ảnh cụ thể thành khái niệm học thuật khái quát',
    explanation:
      "The descriptive narrative of camping in the hot desert and picking rocks is synthesised into the formal academic concept of 'outdoor research'.",
    explanationVi:
      "Hình ảnh miêu tả sống động về cảnh dựng trại ngoài sa mạc nắng cháy đào xới đá được khái quát hóa thành thuật ngữ học thuật 'outdoor research' (nghiên cứu thực địa ngoài trời).",
    paragraphRef: 1,
  },
  {
    id: 'para-2',
    originalText: 'results almost without fail in the animal falling on its face. So the computer alters the activation pattern and tries again...',
    paraphrasedText: 'Several attempts are usually needed before the computer model... manages to stay upright',
    technique: 'Cause-and-Effect Paraphrasing & Antonymic Framing',
    techniqueVi: 'Diễn giải nguyên nhân - kết quả và sử dụng trạng thái đối lập',
    explanation:
      "'Falling on its face' and 'tries again' is paraphrased by 'several attempts are needed... to stay upright'.",
    explanationVi:
      "Hành động 'falling on its face' (ngã sấp mặt) và 'tries again' (thử lại) được paraphrase thành 'several attempts are needed... to stay upright' (cần nhiều lần thử trước khi đứng vững).",
    paragraphRef: 3,
  },
  {
    id: 'para-3',
    originalText: 'similar top speeds were achieved on the computer as in reality',
    paraphrasedText: 'showed them moving faster than they are physically able to [CONTRADICTION]',
    technique: 'Equivalence vs. Exaggerated Degree Contrast',
    techniqueVi: 'Tương đương thực tế đối lập với mức độ cường điệu hóa',
    explanation:
      "The text states identical/similar top speeds ('as in reality'), directly contradicting the question's assertion of moving faster than physical limits.",
    explanationVi:
      "Bài đọc nêu 'tốc độ tương tự như thực tế', tạo sự mâu thuẫn hoàn toàn với câu hỏi vốn khẳng định con người di chuyển nhanh hơn khả năng thể chất.",
    paragraphRef: 3,
  },
  {
    id: 'para-4',
    originalText: 'acted as a support for a sail... used as a temperature-regulating device',
    paraphrasedText: 'necessary to hold up a sail which helped control body heat',
    technique: 'Lexical Synonymy & Paraphrasing',
    techniqueVi: 'Thay thế từ đồng nghĩa và biến đổi kết cấu',
    explanation:
      "'Acted as a support for' = 'necessary to hold up', and 'temperature-regulating device' = 'helped control body heat'.",
    explanationVi:
      "'Support for' được thay bằng 'hold up', còn 'temperature-regulating device' (thiết bị điều hòa nhiệt) được thay bằng 'helped control body heat' (giúp kiểm soát nhiệt độ cơ thể).",
    paragraphRef: 4,
  },
  {
    id: 'para-5',
    originalText: 'deep broad tail and powerful leg muscles to aid locomotion',
    paraphrasedText: 'Locomotion made easier by wide tail and highly developed muscles in legs',
    technique: 'Nominalisation & Passive Conversion',
    techniqueVi: 'Danh từ hóa và chuyển đổi cấu trúc bị động',
    explanation:
      "'To aid locomotion' is transformed into the subject 'Locomotion made easier', with 'broad' = 'wide' and 'powerful' = 'highly developed'.",
    explanationVi:
      "'To aid locomotion' được chuyển vị thành chủ ngữ 'Locomotion made easier' (sự di chuyển được làm cho dễ dàng hơn), kèm theo các cặp từ đồng nghĩa: 'broad' = 'wide' và 'powerful' = 'highly developed'.",
    paragraphRef: 4,
  },
  {
    id: 'para-6',
    originalText: 'control the moisture content, consistency, and other conditions to simulate the mud',
    paraphrasedText: 'attention to its texture and thickness and how much moisture it contains',
    technique: 'Definition Substitution & Wh-Clause Transformation',
    techniqueVi: 'Thay thế thuật ngữ bằng định nghĩa thuộc tính và mệnh đề danh ngữ',
    explanation:
      "'Consistency' is unpacked into its physical properties 'texture and thickness', and 'moisture content' becomes 'how much moisture it contains'.",
    explanationVi:
      "Thuật ngữ 'consistency' được giải nghĩa bằng hai đặc tính vật lý 'texture and thickness' (kết cấu và độ dày), còn 'moisture content' được chuyển thành mệnh đề 'how much moisture it contains'.",
    paragraphRef: 6,
  },
  {
    id: 'para-7',
    originalText: 'stress values can be extracted and calculated from inside it',
    paraphrasedText: 'Levels of stress are measured within the footprint',
    technique: 'Synonym Substitution & Passive Paraphrase',
    techniqueVi: 'Thay thế từ đồng nghĩa và câu bị động tương đương',
    explanation:
      "'Stress values' becomes 'Levels of stress', and 'extracted and calculated' is succinctly paraphrased as 'measured'.",
    explanationVi:
      "'Stress values' được chuyển thành 'Levels of stress' (mức độ áp lực), và hai động từ 'extracted and calculated' được tóm gọn thành 'measured' (được đo lường).",
    paragraphRef: 6,
  },
  {
    id: 'para-8',
    originalText: 'make sense of fossil tracks with greater confidence',
    paraphrasedText: 'More accurate interpretation of fossil tracks is possible',
    technique: 'Idiom to Formal Nominal Construction',
    techniqueVi: 'Chuyển thành ngữ đàm thoại thành kết cấu danh từ học thuật',
    explanation:
      "'Make sense of' = 'interpretation', and 'with greater confidence' = 'more accurate'.",
    explanationVi:
      "'Make sense of' (hiểu thấu/giải mã) được chuyển thành danh từ 'interpretation' (sự diễn giải), còn 'with greater confidence' tương đương 'more accurate'.",
    paragraphRef: 6,
  },
];

export const MATCHING_TASKS: MatchingTaskItem[] = [
  {
    id: 'match-1',
    term: 'Genetic Algorithm',
    definition: 'A computer code that evolves and self-modifies iteratively to reach optimal solutions.',
    definitionVi: 'Thuật toán di truyền: chương trình mã hóa máy tính tự biến đổi và tiến hóa lặp lại để tìm ra giải pháp tối ưu.',
    context: 'Drs Bill Sellers and Phil Manning use a "genetic algorithm" to explore how extinct animals walked.',
  },
  {
    id: 'match-2',
    term: 'Locomotion',
    definition: 'The mechanical process and ability of an animal to move through space using anatomical structures.',
    definitionVi: 'Quá trình vận động và cơ chế chuyển động qua không gian nhờ cấu trúc cơ bắp và xương khớp.',
    context: 'It has a deep broad tail and powerful leg muscles to aid locomotion.',
  },
  {
    id: 'match-3',
    term: 'Acrocanthosaurus',
    definition: 'A gigantic predatory theropod dinosaur whose Greek name signifies "high-spined lizard".',
    definitionVi: 'Một loài khủng long ăn thịt khổng lồ thời tiền sử, tên gọi có nghĩa là "thằn lằn gai cao".',
    context: 'It is called an acrocanthosaurus which literally means "high spined lizard".',
  },
  {
    id: 'match-4',
    term: 'Consistency',
    definition: 'The physical texture, thickness, and resistance to deformation exhibited by mud or sediment.',
    definitionVi: 'Độ sệt, kết cấu và khả năng chịu biến dạng cơ học của bùn đất.',
    context: 'Control the moisture content, consistency, and other conditions to simulate prehistoric mud.',
  },
  {
    id: 'match-5',
    term: 'Counterpart',
    definition: 'An organism or entity having the same functional role in an alternate timeframe or environment.',
    definitionVi: 'Cá thể đối ứng có vai trò hoặc đặc điểm tương tự ở một thời đại hoặc môi trường khác.',
    context: 'The modelled animal should be moving in a manner similar to its now-extinct counterpart.',
  },
  {
    id: 'match-6',
    term: 'Sediment',
    definition: 'Mineral and organic particulate matter deposited over geological epochs under ancient waters.',
    definitionVi: 'Lớp trầm tích khoáng chất và chất hữu cơ lắng đọng qua các kỷ nguyên địa chất.',
    context: 'Knowing what the environment including the mud, or sediment, upon which the animal walked was like.',
  },
  {
    id: 'match-7',
    term: 'Temperature-regulating device',
    definition: 'An anatomical structure such as a vascularized dorsal sail used to absorb or dissipate heat.',
    definitionVi: 'Cấu trúc giải phẫu sinh học (như cánh buồm da nhiều mạch máu) dùng để điều hòa thân nhiệt.',
    context: 'The other half think the spines supported a sail used as a temperature-regulating device.',
  },
  {
    id: 'match-8',
    term: 'Computational Palaeontology',
    definition: 'The branch of paleontology that applies supercomputer simulations and algorithmic modeling to fossils.',
    definitionVi: 'Phân ngành cổ sinh vật học ứng dụng siêu máy tính và mô hình thuật toán để phân tích hóa thạch.',
    context: 'The application of computational techniques in palaeontology is becoming more prevalent every year.',
  },
];

export const GAP_FILL_TASKS: GapFillTaskItem[] = [
  {
    id: 'gap-1',
    sentence: 'The computer model discards failed activation patterns and adapts the new one to reach stable ______.',
    targetWord: 'locomotion',
    options: ['locomotion', 'sediment', 'moisture', 'algorithm'],
    hint: 'A noun denoting physical movement and gait.',
    hintVi: 'Danh từ chỉ sự di chuyển và dáng đi vững vàng của con vật.',
    explanation: 'Locomotion refers to the dynamic ability of the reconstructed animal to walk, run, or chase.',
    explanationVi: "'Locomotion' là từ chính xác chỉ sự vận động đi lại của khủng long.",
  },
  {
    id: 'gap-2',
    sentence: 'Peter Falkingham adjusts the volume, consistency, and ______ content to replicate ancient swamp beds.',
    targetWord: 'moisture',
    options: ['moisture', 'stress', 'claw', 'sail'],
    hint: 'A word describing water presence within the substrate.',
    hintVi: 'Từ chỉ hàm lượng độ ẩm/nước có trong bùn đất.',
    explanation: 'Paragraph 6 specifies that researchers carefully control the moisture content and consistency of mud.',
    explanationVi: "Đoạn 6 nêu rõ việc kiểm soát 'moisture content' (hàm lượng độ ẩm) của bùn kỹ thuật số.",
  },
  {
    id: 'gap-3',
    sentence: 'Dinosaur tracks in rock represent a ______ challenge to interpret compared to modern wildlife footprints.',
    targetWord: 'considerable',
    options: ['considerable', 'negligible', 'superficial', 'prevalent'],
    hint: 'An academic adjective meaning noteworthy, significant, or substantial.',
    hintVi: 'Tính từ học thuật mang nghĩa lớn lao, đáng kể (thách thức đáng kể).',
    explanation: 'Paragraph 5 states that a fossil track poses a "more considerable challenge to interpret in the same way".',
    explanationVi: "Đoạn 5 khẳng định dấu vết hóa thạch đặt ra 'a more considerable challenge' (thách thức lớn hơn rất nhiều).",
  },
  {
    id: 'gap-4',
    sentence: 'Supercomputers run hundreds of simulation cycles ______ to evaluate multiple ground conditions.',
    targetWord: 'simultaneously',
    options: ['simultaneously', 'erratically', 'inaccurately', 'hesitantly'],
    hint: 'An adverb meaning concurrently or at the exact same moment.',
    hintVi: 'Trạng từ chỉ việc tiến hành đồng thời hàng trăm mô phỏng cùng một lúc.',
    explanation: 'Paragraph 6 uses "simultaneously" to describe parallel computing on supercomputers.',
    explanationVi: "Đoạn 6 dùng 'simultaneously' để miêu tả các phép tính mô phỏng chạy song song cùng lúc.",
  },
  {
    id: 'gap-5',
    sentence: 'The high dorsal spines along the backbone are ______ to have acted as anchor points for a thermal sail.',
    targetWord: 'speculated',
    options: ['speculated', 'manufactured', 'dissected', 'inundated'],
    hint: 'A verb meaning hypothesised or theorised in the absence of absolute proof.',
    hintVi: 'Động từ mang nghĩa được phỏng đoán/đưa ra giả thuyết khoa học.',
    explanation: 'Paragraph 4 states that scientists have "speculated" on the functional role of the spines.',
    explanationVi: "Đoạn 4 nêu rõ các nhà khoa học 'speculated' (suy đoán) về chức năng của các gai lưng.",
  },
  {
    id: 'gap-6',
    sentence: 'The digital footprint can be dissected in 3D space to measure internal mechanical ______ values.',
    targetWord: 'stress',
    options: ['stress', 'proportion', 'habitat', 'velocity'],
    hint: 'A physical quantity describing pressure or force distribution inside material.',
    hintVi: 'Đại lượng vật lý chỉ ứng suất hoặc áp lực nén bên trong vật thể.',
    explanation: 'Paragraph 6 explains that internal "stress values" are extracted and calculated.',
    explanationVi: "Đoạn 6 giải thích rằng các giá trị 'stress' (ứng suất/áp lực) được đo lường bên trong dấu chân.",
  },
];

export const REFERENCE_TASKS: ReferenceTaskItem[] = [
  {
    id: 'ref-1',
    question: 'In Paragraph 1, what does the pronoun "that" refer to?',
    quote: 'But Peter Falkingham has done little of that for a while now.',
    paragraphRef: 1,
    options: [
      'Field work camped in the desert picking away at rock',
      'Publishing academic journals on prehistoric biology',
      'Administrative paperwork required by university departments',
      'Digitising complete skeletal specimens in software',
    ],
    correctIndex: 0,
    explanation:
      '"That" refers back to the traditional outdoor image: field workers camped in the desert in the hot sun picking away at the rock.',
    explanationVi:
      "Đại từ 'that' quy chiếu về câu văn phía trước miêu tả công việc thực địa ngoài trời: các nhà nghiên cứu dựng trại ngoài sa mạc đào đá tìm xương.",
  },
  {
    id: 'ref-2',
    question: 'In Paragraph 3, what does the pronoun "This" refer to?',
    quote: 'The model then randomly activates the muscles. This, perhaps unsurprisingly, results almost without fail in the animal falling on its face.',
    paragraphRef: 3,
    options: [
      'The random activation of muscles by the computer model',
      'The complete lack of digitised fossil bone fragments',
      'The rapid speed of dinosaur locomotion across mud',
      'The failure of natural selection algorithms in cyberspace',
    ],
    correctIndex: 0,
    explanation:
      '"This" refers to the immediate prior sentence: the computer model randomly activating the muscles without a pre-learned coordination pattern.',
    explanationVi:
      "Đại từ 'This' thay thế cho hành động vừa được nêu: việc máy tính kích hoạt các nhóm cơ một cách ngẫu nhiên.",
  },
  {
    id: 'ref-3',
    question: 'In Paragraph 4, what does the phrase "one half" refer to?',
    quote: 'There are also those who believe that the spines acted as a support for a sail. Of these, one half think it was used as a display...',
    paragraphRef: 4,
    options: [
      'Fifty percent of the scientists who believe the spines supported a sail',
      'Half of all palaeontologists studying the Acrocanthosaurus skeleton',
      'One half of the dorsal spines located along the creature’s tail',
      'Half of the muscles coordinating the creature’s bipedal gait',
    ],
    correctIndex: 0,
    explanation:
      '"Of these, one half" explicitly refers to the subset of theorists who believe the spines supported a sail.',
    explanationVi:
      "'Of these, one half' phân định nhóm các nhà khoa học tin vào giả thuyết cánh buồm lưng: một nửa nghĩ để khoe sắc ('display'), nửa còn lại nghĩ để điều hòa thân nhiệt.",
  },
  {
    id: 'ref-4',
    question: 'In Paragraph 5, what does "the same way" refer to?',
    quote: 'Modern-day trackers who study the habitats of wild animals can tell you what animal made a track... But a fossil track poses a more considerable challenge to interpret in the same way.',
    paragraphRef: 5,
    options: [
      'Identifying the animal type, its gait (walking/running), and its sex from a footprint',
      'Using digital algorithms and supercomputers to simulate sediment beds',
      'Excavating physical boxes of damp mud under desert sunlight',
      'Measuring internal biomechanical stress distribution inside fossilized bones',
    ],
    correctIndex: 0,
    explanation:
      '"In the same way" refers to determining what animal made the track, whether it was walking or running, and its sex directly from footprint clues.',
    explanationVi:
      "'In the same way' quy chiếu về khả năng đọc dấu vết như người lần dấu hiện đại: xác định con vật nào tạo ra dấu, nó đang đi hay chạy, và thậm chí cả giới tính của nó.",
  },
  {
    id: 'ref-5',
    question: 'In Paragraph 6, what does the pronoun "it" refer to at the end of the sentence?',
    quote: 'This footprint can be chopped up and viewed from any angle and stress values can be extracted and calculated from inside it.',
    paragraphRef: 6,
    options: [
      'The virtual footprint formed in the simulated digital mud',
      'The living emu or ostrich running across the test platform',
      'The supercomputer operating system executing the algorithm',
      'The ancient fossil track discovered in desert sandstone',
    ],
    correctIndex: 0,
    explanation:
      '"Inside it" refers to the digital footprint generated in the virtual mud volume.',
    explanationVi:
      "'Inside it' (bên trong nó) chỉ dấu chân kỹ thuật số ('digital footprint') được tạo ra trong khối bùn mô phỏng.",
  },
];

export const TRANSFORMATION_TASKS: TransformationTaskItem[] = [
  {
    id: 'trans-1',
    original:
      'Palaeontologists can only understand how dinosaurs behaved if they use computer simulations.',
    targetGrammar: 'Condition via Inversion (Had / Were / Only by...)',
    prompt:
      'Rewrite the sentence starting with "Only by utilizing computer simulations...":',
    options: [
      'Only by utilizing computer simulations can palaeontologists understand how dinosaurs behaved.',
      'Only by utilizing computer simulations palaeontologists can understand how dinosaurs behaved.',
      'Only by utilizing computer simulations could palaeontologists behaved in natural habitats.',
      'Only by utilizing computer simulations did dinosaurs walk and stalk.',
    ],
    correctIndex: 0,
    explanation:
      'When an adverbial phrase beginning with "Only by..." is fronted, subject-auxiliary inversion is obligatory ("can palaeontologists understand").',
    explanationVi:
      'Khi cụm từ mở đầu bằng "Only by..." đứng đầu câu, quy tắc ngữ pháp học thuật đòi hỏi đảo ngữ trợ động từ lên trước chủ ngữ ("can palaeontologists understand").',
  },
  {
    id: 'trans-2',
    original:
      'The spines along the dinosaur’s backbone were so high that scientists believe they supported a dorsal sail.',
    targetGrammar: 'So + Adjective Inversion for Dramatic Contrast',
    prompt:
      'Rewrite beginning with "So high were the spines...":',
    options: [
      'So high were the spines along the backbone that scientists believe they supported a dorsal sail.',
      'So high the spines along the backbone were that scientists believe they supported a dorsal sail.',
      'So high were scientists believed that the spines supported a dorsal sail along the backbone.',
      'So high had the spines supported a dorsal sail that scientists believed.',
    ],
    correctIndex: 0,
    explanation:
      '"So + Adjective + Auxiliary + Subject + that clause" is an advanced stylistic inversion used to highlight degree.',
    explanationVi:
      'Cấu trúc đảo ngữ mức độ "So + Tính từ + Động từ to be + Chủ ngữ + that..." giúp nhấn mạnh sự phi thường về chiều cao của các gai lưng.',
  },
  {
    id: 'trans-3',
    original:
      'Researchers chop up the digital footprint and view it from any angle, which allows them to extract internal stress values.',
    targetGrammar: 'Participial Clause of Result',
    prompt:
      'Select the most concise, high-scoring academic paraphrase using a participle clause:',
    options: [
      'Chopping up the digital footprint and viewing it from multiple perspectives enables researchers to extract internal stress values.',
      'Researchers chop up the footprint so that to extract internal stress values from multiple perspectives.',
      'Because researchers view the footprint from any angle, so internal stress values are extracted.',
      'While the footprint was chopped up, researchers were having stress values extracted inside.',
    ],
    correctIndex: 0,
    explanation:
      'Using a fronted gerund subject ("Chopping up... and viewing it...") produces cohesive, authoritative academic syntax.',
    explanationVi:
      'Sử dụng cụm danh động từ làm chủ ngữ ("Chopping up... and viewing it enables...") tạo nên kết cấu câu học thuật gãy gọn và đạt điểm ngữ pháp cao nhất.',
  },
  {
    id: 'trans-4',
    original:
      'It is difficult to physically test every mud condition with a physical container because there are too many variables.',
    targetGrammar: 'Nominalisation with "Staggering"',
    prompt:
      'Select the most sophisticated Academic IELTS transformation:',
    options: [
      'The staggering number of variables renders physical laboratory recreation with mud boxes virtually unfeasible.',
      'Because mud boxes have staggering variables, physical recreation is very hard.',
      'Physical testing is staggering because mud has too many variables in a box.',
      'There is a staggering difficulty when mud boxes are physically tested with variables.',
    ],
    correctIndex: 0,
    explanation:
      'Nominalising the clause with "The staggering number of variables renders... virtually unfeasible" demonstrates Band 9 lexical and grammatical mastery.',
    explanationVi:
      'Cấu trúc danh từ hóa "The staggering number of variables renders... virtually unfeasible" (Số lượng biến số khổng lồ khiến việc tái hiện trong phòng thí nghiệm hầu như bất khả thi) thể hiện năng lực từ vựng và ngữ pháp đỉnh cao.',
  },
  {
    id: 'trans-5',
    original:
      'Scientists compared cyberspace simulations with real animals to verify the computer’s reliability.',
    targetGrammar: 'Passive Modal Construction',
    prompt:
      'Select the passive construction that mirrors academic scientific literature:',
    options: [
      'Cyberspace simulations were benchmarked against empirical measurements of living species to validate computational accuracy.',
      'Scientists were benchmarking cyberspace simulations with living species for accuracy.',
      'Living species were simulated in cyberspace to make scientists reliable.',
      'Cyberspace was verified because real animals were compared by scientists.',
    ],
    correctIndex: 0,
    explanation:
      '"Were benchmarked against empirical measurements... to validate" represents authentic academic vocabulary and objective passive framing.',
    explanationVi:
      "'Were benchmarked against empirical measurements... to validate' (được đối chuẩn với các phép đo thực nghiệm... nhằm kiểm chứng) là cách hành văn chuẩn mực trong giới nghiên cứu khoa học.",
  },
];
