import { ParagraphData, QuestionItem, TipStrip } from '../types';

export const PASSAGE_TITLE = 'Walking with dinosaurs';
export const PASSAGE_SUBTITLE =
  'Peter L. Falkingham and his colleagues at Manchester University are developing techniques which look set to revolutionise our understanding of how dinosaurs and other extinct animals behaved.';

export const PARAGRAPHS: ParagraphData[] = [
  {
    id: 1,
    text: 'The media image of palaeontologists who study prehistoric life is often of field workers camped in the desert in the hot sun, carefully picking away at the rock surrounding a large dinosaur bone. But Peter Falkingham has done little of that for a while now. Instead, he devotes himself to his computer. Not because he has become inundated with paperwork, but because he is a new kind of palaeontologist: a computational palaeontologist.',
  },
  {
    id: 2,
    text: "What few people may consider is that uncovering a skeleton, or discovering a new species, is where the research begins, not where it ends. What we really want to understand is how the extinct animals and plants behaved in their natural habitats. Drs Bill Sellers and Phil Manning from the University of Manchester use a 'genetic algorithm' - a kind of computer code that can change itself and 'evolve' - to explore how extinct animals like dinosaurs, and our own early ancestors, walked and stalked.",
  },
  {
    id: 3,
    text: "The fossilised bones of a complete dinosaur skeleton can tell scientists a lot about the animal, but they do not make up the complete picture and the computer can try to fill the gap. The computer model is given a digitised skeleton, and the locations of known muscles. The model then randomly activates the muscles. This, perhaps unsurprisingly, results almost without fail in the animal falling on its face. So the computer alters the activation pattern and tries again ... usually to similar effect. The modelled 'dinosaurs' quickly 'evolve'. If there is any improvement, the computer discards the old pattern and adopts the new one as the base for alteration. Eventually, the muscle activation pattern evolves a stable way of moving, the best possible solution is reached, and the dinosaur can walk, run, chase or graze. Assuming natural selection evolves the best possible solution too, the modelled animal should be moving in a manner similar to its now-extinct counterpart. And indeed, using the same method for living animals (humans, emu and ostriches) similar top speeds were achieved on the computer as in reality. By comparing their cyberspace results with real measurements of living species, the Manchester team of palaeontologists can be confident in the results computed showing how extinct prehistoric animals such as dinosaurs moved.",
  },
  {
    id: 4,
    text: "The Manchester University team have used the computer simulations to produce a model of a giant meat-eating dinosaur. It is called an acrocanthosaurus which literally means 'high spined lizard' because of the spines which run along its backbone. It is not really known why they are there but scientists have speculated they could have supported a hump that stored fat and water reserves. There are also those who believe that the spines acted as a support for a sail. Of these, one half think it was used as a display and could be flushed with blood and the other half think it was used as a temperature-regulating device. It may have been a mixture of the two. The skull seems out of proportion with its thick, heavy body because it is so narrow and the jaws are delicate and fine. The feet are also worthy of note as they look surprisingly small in contrast to the animal as a whole. It has a deep broad tail and powerful leg muscles to aid locomotion. It walked on its back legs and its front legs were much shorter with powerful claws.",
  },
  {
    id: 5,
    text: 'Falkingham himself is investigating fossilised tracks, or footprints, using computer simulations to help analyse how extinct animals moved. Modern-day trackers who study the habitats of wild animals can tell you what animal made a track, whether that animal was walking or running, sometimes even the sex of the animal. But a fossil track poses a more considerable challenge to interpret in the same way. A crucial consideration is knowing what the environment including the mud, or sediment, upon which the animal walked was like millions of years ago when the track was made. Experiments can answer these questions but the number of variables is staggering. To physically recreate each scenario with a box of mud is extremely time-consuming and difficult to repeat accurately. This is where computer simulation comes in.',
  },
  {
    id: 6,
    text: 'Falkingham uses computational techniques to model a volume of mud and control the moisture content, consistency, and other conditions to simulate the mud of prehistoric times. A footprint is then made in the digital mud by a virtual foot. This footprint can be chopped up and viewed from any angle and stress values can be extracted and calculated from inside it. By running hundreds of these simulations simultaneously on supercomputers, Falkingham can start to understand what types of footprint would be expected if an animal moved in a certain way over a given kind of ground. Looking at the variation in the virtual tracks, researchers can make sense of fossil tracks with greater confidence.',
  },
  {
    id: 7,
    text: 'The application of computational techniques in palaeontology is becoming more prevalent every year. As computer power continues to increase, the range of problems that can be tackled and questions that can be answered will only expand.',
  },
];

export const TIP_STRIP_PART1: TipStrip = {
  title: 'Action plan: Questions 1–6 (True / False / Not Given)',
  questionRange: 'Questions 1–6',
  bullets: [
    'Look at the title and information below it and decide who or what the text is about.',
    "Read the text very quickly to get an idea of what it is about. Don't worry about words you don't understand.",
    'Look at the questions and underline the important words.',
    'Find the paragraph which mentions the information in the first question. Read that paragraph carefully and decide if the answer is True, False or Not given.',
    'The information you need for each question is not evenly spaced through the text. Some may be close together and some further apart.',
    'You will always be able to find the answer by reading the text. You never need to use your own general knowledge.',
    'Two questions following each other may have the same answer. There is always at least one True, one False and one Not given answer.',
  ],
  bulletsVi: [
    'Quan sát tiêu đề bài đọc và phần tóm tắt để xác định chủ đề và đối tượng cốt lõi.',
    'Đọc lướt nhanh bài văn để nắm mạch nội dung chính. Không dừng lại quá lâu ở các từ chuyên ngành chưa rõ nghĩa.',
    'Gạch chân các từ khóa trọng tâm (keywords) trong từng câu nhận định.',
    'Định vị đoạn văn chứa thông tin câu hỏi. Đọc kỹ câu chứa từ khóa để quyết định TRUE, FALSE hay NOT GIVEN.',
    'Thông tin không chia đều trong bài; một số câu có thể nằm sát nhau trong khi có những đoạn không chứa câu hỏi nào.',
    'Luôn căn cứ tuyệt đối vào văn bản trong bài. Không dùng suy đoán hoặc kiến thức cá nhân ngoài đời.',
    'Hai câu hỏi liên tiếp hoàn toàn có thể có cùng đáp án. Đề luôn có đủ ít nhất một câu True, False và Not given.',
  ],
};

export const TIP_STRIP_PART2: TipStrip = {
  title: 'Action plan: Questions 7–9 (Diagram Labelling)',
  questionRange: 'Questions 7–9',
  bullets: [
    'Look at the instructions and see how many words you must write (Choose NO MORE THAN ONE WORD).',
    'Look at the heading to the diagram: "A model of an acrocanthosaurus". This points directly to Paragraph 4.',
    'Underline the important words in each label and decide what part of speech is required (noun, adjective, etc.).',
    'The answers are usually in one or two paragraphs, but they may appear in a different order from the questions.',
    'You will always be able to find the exact word you need in the text; never alter the grammatical form.',
    'Read the labels again after filling them in to make sure the sentences make complete grammatical sense.',
  ],
  bulletsVi: [
    'Kiểm tra giới hạn số từ: Chọn KHÔNG QUÁ MỘT TỪ (NO MORE THAN ONE WORD) từ bài đọc cho mỗi câu.',
    'Quan sát tiêu đề sơ đồ: "A model of an acrocanthosaurus" — thông tin tập trung hoàn toàn ở Đoạn 4.',
    'Xác định loại từ cần điền cho mỗi vị trí (danh từ, tính từ, v.v.).',
    'Các đáp án thường nằm trong 1-2 đoạn nhưng thứ tự nhãn có thể khác thứ tự câu văn trong đoạn.',
    'Chép chính xác từ ngữ nguyên bản từ văn bản, không tự ý biến đổi dạng từ (chia thì, số nhiều/ít).',
    'Đọc lại toàn bộ nhãn hoàn chỉnh để kiểm tra sự mạch lạc ngữ pháp và ý nghĩa.',
  ],
};

export const TIP_STRIP_PART3: TipStrip = {
  title: 'Action plan: Questions 10–13 (Flow-Chart Completion)',
  questionRange: 'Questions 10–13',
  bullets: [
    'Look at the instructions: Write NO MORE THAN TWO WORDS for each answer.',
    'Read the heading to the flow-chart: "Peter Falkingham\'s computer model" — this guides you to Paragraph 6.',
    'Read the flow-chart sequence carefully. Uncompleted boxes serve as directional roadmaps between questions.',
    'Underline important words in each question and anticipate the missing word type.',
    'Copy the word carefully directly from the text without making spelling mistakes.',
    'Both words are necessary when a single noun would be ambiguous (e.g. "fossil tracks" instead of just "tracks").',
  ],
  bulletsVi: [
    'Kiểm tra giới hạn số từ: Viết KHÔNG QUÁ HAI TỪ (NO MORE THAN TWO WORDS) cho mỗi đáp án.',
    'Đọc tiêu đề sơ đồ: "Peter Falkingham\'s computer model" — dẫn bạn trực tiếp đến Đoạn 6.',
    'Các ô không có chỗ trống chính là các cột mốc định vị trình tự các bước mô phỏng.',
    'Gạch chân từ khóa và dự đoán dạng từ cần điền vào chỗ trống.',
    'Chép từ cẩn thận, không được mắc lỗi sai chính tả.',
    'Điền đủ 2 từ đối với các danh từ ghép quan trọng (ví dụ "fossil tracks" thay vì chỉ "tracks").',
  ],
};

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    questionNumber: 1,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'In his study of prehistoric life, Peter Falkingham rarely spends time on outdoor research these days.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: "Look for Peter Falkingham in Paragraph 1 and observe what 'that' refers back to.",
    tipVi:
      "Đọc Đoạn 1, chú ý đại từ thay thế 'that' trong câu 'done little of that for a while now' để xác định 'that' thay thế cho hành động gì.",
    advice:
      "The answer is in the first paragraph. Sometimes the first question is about information in a later paragraph and the first few paragraphs don't have a True/False/Not given question.",
    adviceVi:
      'Đáp án nằm ngay trong đoạn đầu tiên. Chú ý rằng các câu hỏi T/F/NG thường đi theo thứ tự bài đọc.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 1,
    paragraphQuote:
      "The media image of palaeontologists who study prehistoric life is often of field workers camped in the desert in the hot sun, carefully picking away at the rock surrounding a large dinosaur bone. But Peter Falkingham has done little of that for a while now. Instead, he devotes himself to his computer.",
    explanation:
      "TRUE: The first paragraph says 'But Peter Falkingham has done little of that for a while now' ('that' refers back to 'field workers camped in the desert in the hot sun [= outdoor research]').",
    explanationVi:
      "TRUE: Đoạn 1 nêu rõ: 'field workers camped in the desert in the hot sun' (= nghiên cứu thực địa ngoài trời). 'But Peter Falkingham has done little of that for a while now. Instead, he devotes himself to his computer.' ('that' quy chiếu về công việc cắm trại ngoài trời). Vì vậy việc ông hiếm khi dành thời gian nghiên cứu thực địa ngoài trời là hoàn toàn chính xác.",
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'Several attempts are usually needed before the computer model of a dinosaur used by Sellers and Manning manages to stay upright.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Locate where the computer tests muscle activation and what happens when the animal first tries to move in Paragraph 3.',
    tipVi:
      'Tìm trong Đoạn 3 phần mô tả máy tính kích hoạt cơ và những lần thử đầu tiên của con vật trước khi bước đi vững vàng.',
    advice:
      'Which paragraph do you need to read? Which words tell you? You need to read several sentences to find the answer.',
    adviceVi:
      'Cần đọc liền mạch vài câu trong Đoạn 3 để hiểu toàn bộ quá trình thử nghiệm lặp đi lặp lại của mô hình.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 3,
    paragraphQuote:
      "The model then randomly activates the muscles. This, perhaps unsurprisingly, results almost without fail in the animal falling on its face. So the computer alters the activation pattern and tries again ... usually to similar effect. The modelled 'dinosaurs' quickly 'evolve'.",
    explanation:
      "TRUE: The third paragraph talks about the model making 'several attempts': 'This, perhaps unsurprisingly, results almost without fail in the animal falling on its face. So the computer alters the activation pattern and tries again ... usually to similar effect' (Sellers and Manning are mentioned in the previous paragraph).",
    explanationVi:
      "TRUE: Đoạn 3 mô tả mô hình máy tính phải thử nghiệm nhiều lần: ban đầu con vật hầu như luôn ngã sấp mặt ('falling on its face'), máy tính phải điều chỉnh mô hình kích hoạt cơ và thử lại ('alters the activation pattern and tries again ... usually to similar effect') nhiều lần cho đến khi đạt được cách di chuyển thăng bằng và ổn định.",
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'When the Sellers and Manning computer model was used for people, it showed them moving faster than they are physically able to.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: "Compare the statement's 'moving faster than they are physically able to' with the passage's 'similar top speeds were achieved on the computer as in reality'.",
    tipVi:
      "Đối chiếu nhận định 'di chuyển nhanh hơn khả năng thể chất thực tế' với cụm từ trong bài 'similar top speeds were achieved on the computer as in reality'.",
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 3,
    paragraphQuote:
      'And indeed, using the same method for living animals (humans, emu and ostriches) similar top speeds were achieved on the computer as in reality.',
    explanation:
      "FALSE: The text says speeds for humans on the computer model matched what they can do in real life: 'And indeed, using the same method for living animals (humans, emu and ostriches) similar top speeds were achieved on the computer as in reality'.",
    explanationVi:
      "FALSE: Bài đọc khẳng định: khi áp dụng cùng phương pháp cho các loài còn sống (con người, chim emu và đà điểu), tốc độ tối đa đạt được trên mô hình máy tính tương đương như trong đời thực ('similar top speeds were achieved on the computer as in reality'), mâu thuẫn trực tiếp với câu nói rằng mô hình cho thấy con người chạy nhanh hơn khả năng thực tế.",
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'Some palaeontologists have expressed reservations about the conclusions reached by the Manchester team concerning the movement of dinosaurs.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: "Check if any other palaeontologists' doubts or criticisms are cited in Paragraph 3.",
    tipVi:
      'Đọc kỹ câu cuối Đoạn 3 xem có nhắc tới bất kỳ ý kiến nghi ngờ hay dè dặt nào từ các nhà cổ sinh vật học khác hay không.',
    advice:
      'Which sentence talks about the conclusions made by the Manchester team about the movement of dinosaurs? What does it say about the opinions of other palaeontologists?',
    adviceVi:
      'Câu văn cuối Đoạn 3 chỉ nói nhóm Manchester tự tin vào kết quả; bài viết không đề cập gì đến ý kiến của các nhà cổ sinh vật học khác.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 3,
    paragraphQuote:
      'By comparing their cyberspace results with real measurements of living species, the Manchester team of palaeontologists can be confident in the results computed showing how extinct prehistoric animals such as dinosaurs moved.',
    explanation:
      "NOT GIVEN: The sentence at the end of the third paragraph says the Manchester team are 'confident in the results' (about how dinosaurs moved) but there is no mention of some palaeontologists expressing reservations.",
    explanationVi:
      "NOT GIVEN: Câu kết Đoạn 3 cho biết nhóm Manchester rất tự tin vào kết quả tính toán ('can be confident in the results computed'), nhưng trong bài hoàn toàn không có bất kỳ dòng nào đề cập đến việc các nhà cổ sinh vật học khác có bày tỏ sự e ngại/hoài nghi ('expressed reservations') hay không.",
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'An experienced tracker can analyse fossil footprints as easily as those made by live animals.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: "Compare 'as easily as' with the passage's 'poses a more considerable challenge to interpret in the same way'.",
    tipVi:
      "Đối chiếu cụm từ 'dễ dàng như' (as easily as) với cách diễn đạt trong bài: 'poses a more considerable challenge to interpret in the same way'.",
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 5,
    paragraphQuote:
      'Modern-day trackers who study the habitats of wild animals can tell you what animal made a track, whether that animal was walking or running, sometimes even the sex of the animal. But a fossil track poses a more considerable challenge to interpret in the same way.',
    explanation:
      "FALSE: The fifth paragraph talks about modern-day trackers being able to analyse the tracks of wild animals and the next sentence compares this to analysing fossil tracks which is much harder to do: 'But a fossil track poses a more considerable challenge to interpret in the same way.'",
    explanationVi:
      "FALSE: Đoạn 5 cho biết người lần dấu hiện đại có thể đọc dấu vết thú hoang rất chi tiết, nhưng ngay sau đó khẳng định dấu vết hóa thạch là một thử thách khó khăn hơn rất nhiều: 'a fossil track poses a more considerable challenge to interpret in the same way'. Điều này trái ngược hoàn toàn với nhận định 'as easily as' (dễ dàng như nhau).",
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt:
      'Research carried out into the composition of prehistoric mud has been found to be inaccurate.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look for mentions of prehistoric mud in Paragraph 6 and see if its research accuracy is questioned.',
    tipVi:
      'Đọc Đoạn 6 về việc mô phỏng bùn tiền sử và xem bài đọc có kết luận nghiên cứu nào là thiếu chính xác (inaccurate) hay không.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 6,
    paragraphQuote:
      'Falkingham uses computational techniques to model a volume of mud and control the moisture content, consistency, and other conditions to simulate the mud of prehistoric times.',
    explanation:
      "NOT GIVEN: The sixth paragraph says Falkingham uses digital mud to simulate prehistoric mud but it doesn't say anything about the research being inaccurate.",
    explanationVi:
      "NOT GIVEN: Đoạn 6 giải thích Falkingham sử dụng kỹ thuật điện toán để mô phỏng bùn thời tiền sử, nhưng không hề nhắc tới việc các nghiên cứu trước đó về thành phần bùn bị phát hiện là sai lệch hay không chính xác ('inaccurate').",
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    sectionType: 'diagram',
    diagramLabel: 'Spines / Sail (Body Heat Control)',
    prompt:
      "Dinosaur's name comes from spines. One theory: they were necessary to hold up a 7 ..................... which helped control body heat.",
    instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
    maxWords: 1,
    tip: "Find what the spines supported to regulate temperature ('temperature-regulating device = control body heat').",
    tipVi:
      "Tìm trong Đoạn 4 bộ phận được các gai xương nâng đỡ ('hold up') có công dụng điều hòa thân nhiệt ('temperature-regulating device = control body heat').",
    advice:
      "There are several theories about the spines. Which one talks about 'body heat'? Which words are used?",
    adviceVi:
      "Có nhiều giả thuyết về gai lưng. Giả thuyết nào nói về 'thân nhiệt'? Từ ngữ nào được sử dụng?",
    distraction:
      "'hump' is wrong because it is thought it 'stored fat and water', not that it controlled temperature.",
    distractionVi:
      "Từ 'hump' (cái bướu) là đáp án bẫy vì bài viết nói bướu dùng để tích mỡ và nước ('stored fat and water reserves'), không phải để điều hòa nhiệt độ.",
    officialAnswer: 'sail',
    acceptedAnswers: ['sail', 'a sail'],
    paragraphRef: 4,
    paragraphQuote:
      'There are also those who believe that the spines acted as a support for a sail. Of these, one half think it was used as a display and could be flushed with blood and the other half think it was used as a temperature-regulating device.',
    explanation:
      "sail: 'There are also those who believe that the spines acted as a support for a sail. Of these, ... and the other half think it was used as a temperature-regulating device [= control body heat].' Distraction 'hump' is wrong because it is thought it 'stored fat and water', not that it controlled temperature.",
    explanationVi:
      "sail: Đoạn 4 trình bày giả thuyết các gai xương nâng đỡ một cánh buồm da ('spines acted as a support for a sail'), và một nửa số người tin vào giả thuyết này nghĩ nó được dùng như thiết bị điều hòa thân nhiệt ('temperature-regulating device' = helped control body heat). Đáp án chính xác là 'sail'.",
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'short_answer',
    sectionType: 'diagram',
    diagramLabel: 'Skull Proportion',
    prompt: 'Skull is 8 ..................... compared with rest of body.',
    instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
    maxWords: 1,
    tip: 'Look for an adjective describing the skull and why it is out of proportion with its body in Paragraph 4.',
    tipVi:
      'Tìm tính từ miêu tả hộp sọ (skull) trong Đoạn 4 giải thích lý do nó không cân xứng với cơ thể to nặng.',
    advice: 'What kind of word do you need to look for?',
    adviceVi:
      'Cấu trúc câu "Skull is [adjective]" yêu cầu bạn tìm một tính từ mô tả đặc điểm kích thước hoặc hình dáng hộp sọ.',
    distraction:
      "Its body is 'thick' and 'heavy' and its jaws are 'delicate and fine'.",
    distractionVi:
      "Thân mình của nó thì 'thick' và 'heavy', hàm thì 'delicate and fine'. Chỉ có từ 'narrow' (hẹp) là tính từ bổ nghĩa cho hộp sọ.",
    officialAnswer: 'narrow',
    acceptedAnswers: ['narrow', 'so narrow'],
    paragraphRef: 4,
    paragraphQuote:
      'The skull seems out of proportion with its thick, heavy body because it is so narrow and the jaws are delicate and fine.',
    explanation:
      "narrow: You need an adjective to describe the shape or size of the skull: 'The skull seems out of proportion with its thick, heavy body because it is so narrow ...'. Distraction Its body is 'thick' and 'heavy' and its jaws are 'delicate and fine'.",
    explanationVi:
      "narrow: Cần một tính từ chỉ hình dạng hoặc kích thước của hộp sọ: 'The skull seems out of proportion with its thick, heavy body because it is so narrow...' (hộp sọ dường như không cân đối với cơ thể dày và nặng vì nó quá hẹp). Đáp án là 'narrow'.",
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'short_answer',
    sectionType: 'diagram',
    diagramLabel: 'Locomotion / Movement',
    prompt:
      '9 ..................... made easier by wide tail and highly developed muscles in legs.',
    instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
    maxWords: 1,
    tip: "Find the noun in Paragraph 4 meaning movement that is aided ('aid = make easier') by tail and leg muscles.",
    tipVi:
      "Tìm danh từ trong Đoạn 4 chỉ hoạt động di chuyển được trợ giúp ('aid = make easier') bởi chiếc đuôi rộng và cơ chân khỏe.",
    advice:
      "Find the sentences which talk about the tail and legs. Which word means the same as 'made easier'?",
    adviceVi:
      "Tìm câu nói về đuôi và chân trong Đoạn 4. Từ nào mang nghĩa 'làm cho dễ dàng hơn' (made easier = aid)?",
    officialAnswer: 'Locomotion',
    acceptedAnswers: ['Locomotion', 'locomotion'],
    paragraphRef: 4,
    paragraphQuote: 'It has a deep broad tail and powerful leg muscles to aid locomotion.',
    explanation:
      "Locomotion: 'It has a deep broad tail and powerful [= highly developed] leg muscles to aid [= make easier] locomotion.'",
    explanationVi:
      "Locomotion: Đoạn 4 khẳng định: 'It has a deep broad tail and powerful leg muscles to aid locomotion'. 'Aid' đồng nghĩa với 'make easier', 'powerful' đồng nghĩa với 'highly developed'. Danh từ chỉ hoạt động được hỗ trợ là 'locomotion' (sự di chuyển/vận động).",
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'short_answer',
    sectionType: 'flowchart',
    prompt:
      'Mud is simulated with attention to its texture and thickness and how much 10 ..................... it contains.',
    instruction: 'Write NO MORE THAN TWO WORDS for each answer.',
    maxWords: 2,
    tip: "Look in Paragraph 6 for what property of the mud is controlled alongside consistency ('texture and thickness').",
    tipVi:
      "Tìm trong Đoạn 6 yếu tố đi liền với 'consistency' (độ đặc quánh/kết cấu) khi kiểm soát bùn mô phỏng.",
    advice: "Copy the word carefully. Don't make a spelling mistake.",
    adviceVi: 'Hãy chép từ thật chuẩn xác trực tiếp từ bài đọc để tránh sai lỗi chính tả.',
    officialAnswer: 'moisture',
    acceptedAnswers: ['moisture', 'moisture content'],
    paragraphRef: 6,
    paragraphQuote:
      'Falkingham uses computational techniques to model a volume of mud and control the moisture content, consistency, and other conditions to simulate the mud of prehistoric times.',
    explanation:
      "moisture: 'Falkingham uses computational techniques to ... and control the moisture content, consistency [= texture and thickness], and other conditions to simulate the mud of prehistoric times.'",
    explanationVi:
      "moisture: Đoạn 6 giải thích: 'control the moisture content, consistency [= texture and thickness], and other conditions...'. 'How much moisture it contains' tương ứng với 'moisture content' (hàm lượng độ ẩm). Đáp án chính xác là 'moisture' (hoặc 'moisture content').",
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'short_answer',
    sectionType: 'flowchart',
    prompt: 'Levels of 11 ..................... are measured within the footprint.',
    instruction: 'Write NO MORE THAN TWO WORDS for each answer.',
    maxWords: 2,
    tip: "Scan Paragraph 6 for what values are extracted and calculated ('measured') from inside the footprint.",
    tipVi:
      "Tìm trong Đoạn 6 những giá trị nào được trích xuất và tính toán ('extracted and calculated' = measured) từ bên trong vết chân.",
    officialAnswer: 'stress',
    acceptedAnswers: ['stress', 'stress values'],
    paragraphRef: 6,
    paragraphQuote:
      'This footprint can be chopped up and viewed from any angle and stress values can be extracted and calculated from inside it.',
    explanation:
      "stress: 'stress values [= levels of stress] can be extracted and calculated [= measured] from inside it'.",
    explanationVi:
      "stress: Đoạn 6 ghi rõ: 'stress values can be extracted and calculated from inside it'. 'Extracted and calculated' nghĩa là được đo lường (measured), 'stress values' tương đương 'levels of stress' (mức độ áp lực/ứng suất). Đáp án là 'stress' (hoặc 'stress values').",
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'short_answer',
    sectionType: 'flowchart',
    prompt: 'Multiple simulations relate footprints to different types of 12 .....................',
    instruction: 'Write NO MORE THAN TWO WORDS for each answer.',
    tip: "Look in Paragraph 6 for what comes after running hundreds of simulations simultaneously ('multiple simulations').",
    tipVi:
      "Đọc câu trong Đoạn 6 về việc chạy hàng trăm mô phỏng đồng thời ('running hundreds of these simulations simultaneously') để xem vết chân tương ứng với loại bề mặt nào.",
    distraction: "'tracks' is wrong because it means the same as 'footprints'.",
    distractionVi:
      "Từ 'tracks' là từ gây nhiễu vì 'tracks' đồng nghĩa với 'footprints' (dấu chân) đã có ở vế trước của câu hỏi.",
    officialAnswer: 'ground',
    acceptedAnswers: ['ground', 'a given kind of ground'],
    paragraphRef: 6,
    paragraphQuote:
      'By running hundreds of these simulations simultaneously on supercomputers, Falkingham can start to understand what types of footprint would be expected if an animal moved in a certain way over a given kind of ground.',
    explanation:
      "ground: 'By running hundreds of these simulations simultaneously [= multiple simulations] on supercomputers, Falkingham can start to understand ... over a given kind of ground.' Distraction 'tracks' is wrong because it means the same as 'footprints'.",
    explanationVi:
      "ground: Đoạn 6 chỉ rõ: 'By running hundreds of these simulations simultaneously... understand what types of footprint would be expected if an animal moved in a certain way over a given kind of ground'. 'Different types of ground' tương ứng với 'a given kind of ground'. Đáp án là 'ground'.",
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'short_answer',
    sectionType: 'flowchart',
    prompt: 'More accurate interpretation of 13 ..................... is possible.',
    instruction: 'Write NO MORE THAN TWO WORDS for each answer.',
    maxWords: 2,
    tip: "Look at the concluding sentence of Paragraph 6 for what researchers can understand with greater confidence ('more accurate interpretation').",
    tipVi:
      "Đọc câu cuối cùng của Đoạn 6 để tìm xem các nhà nghiên cứu có thể diễn giải điều gì với độ tin cậy lớn hơn ('make sense of with greater confidence').",
    advice: 'You need two words for this answer.',
    adviceVi:
      "Bạn cần điền đủ cả hai từ ('fossil tracks') vì chỉ dùng 'tracks' sẽ không phân biệt được với dấu chân động vật hiện đại.",
    officialAnswer: 'fossil tracks',
    acceptedAnswers: ['fossil tracks', 'fossil track'],
    paragraphRef: 6,
    paragraphQuote:
      'Looking at the variation in the virtual tracks, researchers can make sense of fossil tracks with greater confidence.',
    explanation:
      "fossil tracks: 'researchers can make sense of fossil tracks with greater confidence [= more accurate interpretation].' (Both words are necessary here as 'tracks' could mean any tracks.)",
    explanationVi:
      "fossil tracks: Câu cuối Đoạn 6 kết luận: 'researchers can make sense of fossil tracks with greater confidence'. 'Make sense of with greater confidence' tương đương 'more accurate interpretation'. Cần phải có cả hai từ 'fossil tracks' để xác định đúng đối tượng là dấu vết hóa thạch cổ xưa.",
  },
];

export function checkAnswerCorrectness(question: QuestionItem, rawInput: string): boolean {
  if (!rawInput) return false;
  const cleaned = rawInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');

  if (question.type === 'true_false_not_given') {
    const norm = cleaned.toUpperCase();
    if (question.officialAnswer === 'TRUE') {
      return norm === 'TRUE' || norm === 'T';
    } else if (question.officialAnswer === 'FALSE') {
      return norm === 'FALSE' || norm === 'F';
    } else if (question.officialAnswer === 'NOT GIVEN') {
      return norm === 'NOT GIVEN' || norm === 'NOTGIVEN' || norm === 'NG';
    }
  }

  // Short answer checks (Diagram & Flow Chart)
  const userTokens = cleaned.split(/\s+/).filter(Boolean).join(' ');
  for (const accepted of question.acceptedAnswers) {
    const accTokens = accepted
      .trim()
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
      .split(/\s+/).filter(Boolean).join(' ');
    if (userTokens === accTokens) return true;
  }

  // Specific tolerance logic
  if (question.id === 7) {
    if (['sail', 'a sail', 'the sail'].includes(userTokens)) return true;
  }
  if (question.id === 8) {
    if (['narrow', 'so narrow'].includes(userTokens)) return true;
  }
  if (question.id === 9) {
    if (['locomotion', 'its locomotion'].includes(userTokens)) return true;
  }
  if (question.id === 10) {
    if (['moisture', 'moisture content', 'its moisture'].includes(userTokens)) return true;
  }
  if (question.id === 11) {
    if (['stress', 'stress values', 'levels of stress', 'stress value'].includes(userTokens)) return true;
  }
  if (question.id === 12) {
    if (['ground', 'the ground', 'kind of ground'].includes(userTokens)) return true;
  }
  if (question.id === 13) {
    if (['fossil tracks', 'fossil track', 'the fossil tracks'].includes(userTokens)) return true;
  }

  return false;
}

export function calculateEstimatedBandScore(score: number): { band: string; description: string } {
  if (score >= 12) return { band: '8.5 - 9.0', description: 'Expert User — Excellent reading comprehension & accuracy' };
  if (score >= 10) return { band: '7.5 - 8.0', description: 'Very Good User — High accuracy with strong scanning skills' };
  if (score >= 8) return { band: '6.5 - 7.0', description: 'Competent User — Solid understanding of details and vocabulary' };
  if (score >= 6) return { band: '5.5 - 6.0', description: 'Modest User — Good grasp, review FALSE vs NOT GIVEN criteria' };
  if (score >= 4) return { band: '4.5 - 5.0', description: 'Developing User — Focus on locating keywords & paraphrasing' };
  return { band: '< 4.5', description: 'Beginner — Practice scanning for specific synonyms and keywords' };
}
