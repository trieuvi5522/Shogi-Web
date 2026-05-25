import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'kaya-board-standard',
    slug: 'kaya-board-standard',
    priceVnd: 2380000,
    image: 'kaya-board-standard',
    imageAlt: {
      vi: 'Bàn cờ shogi gỗ kaya tiêu chuẩn',
      en: 'Standard kaya wood shogi board',
    },
    visual: { kind: 'board', mark: '王', wood: '#9b5a32', woodDark: '#472618' },
    vi: {
      name: 'Bàn Shogi Kaya Tiêu Chuẩn',
      shortDescription: 'Mặt bàn 9x9 vân ấm, phù hợp luyện tập hằng ngày.',
      description:
        'Bàn shogi gỗ kaya hoàn thiện mờ, giữ cảm giác cổ điển và tiếng đặt quân chắc tay. Kích thước gọn cho bàn trà hoặc góc học cờ tại nhà.',
      material: 'Gỗ kaya ghép chọn vân',
      dimensions: '33 x 30 x 3 cm',
      details: ['Mặt kẻ rõ, độ tương phản dịu mắt', 'Phủ dầu bảo vệ vân gỗ', 'Kèm túi vải washi bảo quản'],
    },
    en: {
      name: 'Standard Kaya Shogi Board',
      shortDescription: 'Warm 9x9 board for daily study and casual play.',
      description:
        'A matte-finished kaya shogi board with a classic table presence and a satisfying piece sound. Compact enough for a tea table or study corner.',
      material: 'Selected kaya wood laminate',
      dimensions: '33 x 30 x 3 cm',
      details: ['Clear low-glare grid', 'Oil-finished wood grain', 'Includes washi cloth storage sleeve'],
    },
  },
  {
    id: 'hinoki-folding-board',
    slug: 'hinoki-folding-board',
    priceVnd: 1260000,
    image: 'hinoki-folding-board',
    imageAlt: {
      vi: 'Bàn shogi gỗ hinoki gấp đôi',
      en: 'Folding hinoki shogi board',
    },
    visual: { kind: 'board', mark: '歩', wood: '#c2854c', woodDark: '#5e341f' },
    vi: {
      name: 'Bàn Hinoki Gấp Đôi',
      shortDescription: 'Bàn gấp nhẹ, dễ mang theo khi đi câu lạc bộ.',
      description:
        'Phiên bản hinoki gấp đôi dành cho người muốn một bàn cờ nhẹ, mở nhanh và vẫn có sắc gỗ Nhật cổ. Bản lề chìm giúp bề mặt phẳng khi chơi.',
      material: 'Gỗ hinoki, bản lề đồng',
      dimensions: '33 x 30 x 1.6 cm',
      details: ['Gấp gọn sau ván đấu', 'Bản lề chìm ít cấn tay', 'Phù hợp người mới bắt đầu'],
    },
    en: {
      name: 'Folding Hinoki Board',
      shortDescription: 'Light folding board for clubs and travel.',
      description:
        'A folding hinoki board for players who want portability without losing the warmth of Japanese wood. Hidden hinges keep the playing surface steady.',
      material: 'Hinoki wood, brass hinge',
      dimensions: '33 x 30 x 1.6 cm',
      details: ['Easy to fold after play', 'Low-profile hidden hinge', 'Great first board'],
    },
  },
  {
    id: 'shin-kaya-thick-board',
    slug: 'shin-kaya-thick-board',
    priceVnd: 3850000,
    image: 'shin-kaya-thick-board',
    imageAlt: {
      vi: 'Bàn shogi shin-kaya dày',
      en: 'Thick shin-kaya shogi board',
    },
    visual: { kind: 'board', mark: '金', wood: '#8b4d2c', woodDark: '#301c14' },
    vi: {
      name: 'Bàn Shin-Kaya Dày',
      shortDescription: 'Bàn dày tiếng quân trầm, hợp không gian trưng bày.',
      description:
        'Bàn shin-kaya dày với mép vát nhẹ, tạo cảm giác trang trọng cho những ván đấu chậm. Đây là lựa chọn nổi bật cho góc cờ mang tính sưu tầm.',
      material: 'Gỗ shin-kaya chọn vân',
      dimensions: '34 x 31 x 5.5 cm',
      details: ['Thân bàn dày, đầm tay', 'Âm quân trầm và ấm', 'Hoàn thiện cạnh bằng tay'],
    },
    en: {
      name: 'Thick Shin-Kaya Board',
      shortDescription: 'A deep-sounding display board for slow games.',
      description:
        'A thick shin-kaya board with softly beveled edges and a ceremonial presence. A strong choice for a collectible shogi corner.',
      material: 'Selected shin-kaya wood',
      dimensions: '34 x 31 x 5.5 cm',
      details: ['Weighty board body', 'Warm resonant piece sound', 'Hand-finished edges'],
    },
  },
  {
    id: 'magnetic-travel-set',
    slug: 'magnetic-travel-set',
    priceVnd: 780000,
    image: 'magnetic-travel-set',
    imageAlt: {
      vi: 'Bộ shogi nam châm du lịch',
      en: 'Magnetic travel shogi set',
    },
    visual: { kind: 'set', mark: '飛', wood: '#6e5a39', woodDark: '#1d3557' },
    vi: {
      name: 'Bộ Shogi Nam Châm Du Lịch',
      shortDescription: 'Bộ gọn nhẹ để chơi trên tàu, quán cà phê hoặc chuyến đi.',
      description:
        'Bộ shogi nam châm giữ quân ổn định khi di chuyển. Hộp gập có khoang đựng quân riêng, phù hợp học khai cuộc ở bất kỳ đâu.',
      material: 'Nhựa phủ giả gỗ, lõi nam châm',
      dimensions: '25 x 23 x 2 cm',
      details: ['Quân bám nhẹ trên mặt bàn', 'Hộp gập kiêm bàn chơi', 'Dễ mang trong balo'],
    },
    en: {
      name: 'Magnetic Travel Set',
      shortDescription: 'Compact set for trains, cafes, and trips.',
      description:
        'A magnetic shogi set that keeps pieces in place while moving. The folding case has dedicated storage, making opening study easy anywhere.',
      material: 'Wood-look polymer, magnetic core',
      dimensions: '25 x 23 x 2 cm',
      details: ['Pieces hold gently to the board', 'Folding case becomes the board', 'Backpack friendly'],
    },
  },
  {
    id: 'hand-carved-koma',
    slug: 'hand-carved-koma',
    priceVnd: 2940000,
    image: 'hand-carved-koma',
    imageAlt: {
      vi: 'Bộ quân shogi khắc tay',
      en: 'Hand-carved shogi pieces',
    },
    visual: { kind: 'pieces', mark: '角', wood: '#b8793f', woodDark: '#5a2c18' },
    vi: {
      name: 'Bộ Quân Khắc Tay',
      shortDescription: 'Quân gỗ tsuge khắc nét sâu, cảm giác cầm chắc.',
      description:
        'Bộ quân dành cho người thích nét chữ có chiều sâu và sự khác biệt của đồ thủ công. Mỗi quân được đánh bóng nhẹ để giữ sắc gỗ tự nhiên.',
      material: 'Gỗ tsuge, khắc thủ công',
      dimensions: '40 quân, hộp gỗ nhỏ',
      details: ['Nét khắc sâu dễ đọc', 'Mặt quân cân bằng', 'Hộp gỗ lót vải đi kèm'],
    },
    en: {
      name: 'Hand-Carved Koma Set',
      shortDescription: 'Tsuge wood pieces with deep carved lettering.',
      description:
        'A piece set for players who appreciate tactile lettering and handmade character. Each piece is lightly polished to preserve the natural wood tone.',
      material: 'Tsuge wood, hand-carved',
      dimensions: '40 pieces, small wood box',
      details: ['Deep readable carving', 'Balanced piece face', 'Lined wooden box included'],
    },
  },
  {
    id: 'printed-koma-starter',
    slug: 'printed-koma-starter',
    priceVnd: 620000,
    image: 'printed-koma-starter',
    imageAlt: {
      vi: 'Bộ quân shogi in cho người mới',
      en: 'Printed beginner shogi pieces',
    },
    visual: { kind: 'pieces', mark: '銀', wood: '#d3a160', woodDark: '#6d3a20' },
    vi: {
      name: 'Bộ Quân In Starter',
      shortDescription: 'Dễ đọc, giá mềm, đủ tốt cho lớp học và gia đình.',
      description:
        'Bộ quân in rõ ràng giúp người mới nhận mặt quân nhanh. Bề mặt phủ mờ chống lóa, dễ dùng trong các buổi hướng dẫn shogi cơ bản.',
      material: 'Gỗ ép phủ mờ',
      dimensions: '40 quân',
      details: ['Chữ in lớn và rõ', 'Trọng lượng nhẹ', 'Phù hợp lớp học shogi'],
    },
    en: {
      name: 'Starter Printed Koma',
      shortDescription: 'Readable, affordable pieces for classes and families.',
      description:
        'A clearly printed piece set that helps beginners recognize pieces quickly. The matte surface reduces glare during lessons.',
      material: 'Matte-finished pressed wood',
      dimensions: '40 pieces',
      details: ['Large readable characters', 'Lightweight handling', 'Great for shogi lessons'],
    },
  },
  {
    id: 'lacquer-koma-box',
    slug: 'lacquer-koma-box',
    priceVnd: 980000,
    image: 'lacquer-koma-box',
    imageAlt: {
      vi: 'Hộp đựng quân sơn mài',
      en: 'Lacquer shogi piece box',
    },
    visual: { kind: 'accessory', mark: '香', wood: '#4d231a', woodDark: '#111111' },
    vi: {
      name: 'Hộp Quân Sơn Mài',
      shortDescription: 'Hộp đựng quân tông trầm, điểm nhấn đỏ son cổ điển.',
      description:
        'Hộp quân nhỏ phủ sơn mài trầm, giữ bộ koma gọn gàng và đẹp khi đặt cạnh bàn cờ. Phần nắp đóng khít, cảm giác chắc tay.',
      material: 'Gỗ phủ sơn mài',
      dimensions: '11 x 11 x 8 cm',
      details: ['Nắp đóng khít', 'Lót vải mềm bên trong', 'Hợp với bàn gỗ tông tối'],
    },
    en: {
      name: 'Lacquer Koma Box',
      shortDescription: 'A dark-toned box with classic vermilion detail.',
      description:
        'A compact lacquered piece box that keeps koma tidy and beautiful beside the board. The lid closes snugly with a reassuring feel.',
      material: 'Lacquered wood',
      dimensions: '11 x 11 x 8 cm',
      details: ['Snug lid fit', 'Soft fabric lining', 'Pairs well with darker boards'],
    },
  },
  {
    id: 'washi-board-mat',
    slug: 'washi-board-mat',
    priceVnd: 540000,
    image: 'washi-board-mat',
    imageAlt: {
      vi: 'Khăn lót bàn cờ họa tiết washi',
      en: 'Washi-pattern shogi board mat',
    },
    visual: { kind: 'accessory', mark: '桂', wood: '#a43e2d', woodDark: '#1d3557' },
    vi: {
      name: 'Khăn Lót Bàn Washi',
      shortDescription: 'Lót bàn giúp chống trầy và tạo nền ảnh đẹp.',
      description:
        'Khăn lót lấy cảm hứng từ giấy washi, dùng dưới bàn cờ để bảo vệ mặt gỗ và làm không gian chơi cờ mềm hơn.',
      material: 'Cotton dệt dày',
      dimensions: '48 x 42 cm',
      details: ['Mặt vải ít trượt', 'Màu indigo trầm', 'Có thể cuộn gọn'],
    },
    en: {
      name: 'Washi Board Mat',
      shortDescription: 'Protects surfaces and gives the board a calm backdrop.',
      description:
        'A board mat inspired by washi paper texture, designed to protect table surfaces and soften the look of a shogi setup.',
      material: 'Heavy woven cotton',
      dimensions: '48 x 42 cm',
      details: ['Low-slip fabric surface', 'Deep indigo tone', 'Rolls up easily'],
    },
  },
  {
    id: 'beginner-book-vi',
    slug: 'beginner-book-vi',
    priceVnd: 320000,
    image: 'beginner-book-vi',
    imageAlt: {
      vi: 'Sách học shogi nhập môn tiếng Việt',
      en: 'Vietnamese beginner shogi book',
    },
    visual: { kind: 'book', mark: '歩', wood: '#d8c7a4', woodDark: '#7b4328' },
    vi: {
      name: 'Sách Nhập Môn Shogi',
      shortDescription: 'Luật chơi, giá trị quân và 12 bài khai cuộc cơ bản.',
      description:
        'Tài liệu nhập môn bằng tiếng Việt, trình bày từng bước để người mới có thể chơi ván đầu tiên và hiểu các ý tưởng chiến thuật căn bản.',
      material: 'Sách bìa mềm',
      dimensions: '128 trang',
      details: ['Giải thích luật bằng ví dụ', 'Sơ đồ dễ theo dõi', 'Phù hợp tự học'],
    },
    en: {
      name: 'Vietnamese Shogi Primer',
      shortDescription: 'Rules, piece values, and 12 basic opening lessons.',
      description:
        'A Vietnamese beginner guide that walks new players through their first game and core tactical ideas step by step.',
      material: 'Paperback book',
      dimensions: '128 pages',
      details: ['Rule examples included', 'Easy-to-follow diagrams', 'Good for self-study'],
    },
  },
  {
    id: 'opening-card-deck',
    slug: 'opening-card-deck',
    priceVnd: 410000,
    image: 'opening-card-deck',
    imageAlt: {
      vi: 'Bộ thẻ khai cuộc shogi',
      en: 'Shogi opening study card deck',
    },
    visual: { kind: 'book', mark: '飛', wood: '#1d3557', woodDark: '#0e1b2d' },
    vi: {
      name: 'Bộ Thẻ Khai Cuộc',
      shortDescription: 'Thẻ luyện nhanh các thế mở đầu phổ biến.',
      description:
        'Bộ thẻ nhỏ giúp ôn vị trí quân và ý tưởng khai cuộc trước khi vào ván. Dễ dùng cho luyện tập 10 phút mỗi ngày.',
      material: 'Giấy dày phủ mờ',
      dimensions: '48 thẻ',
      details: ['In hai mặt', 'Kèm vòng kẹp đồng', 'Dễ mang theo'],
    },
    en: {
      name: 'Opening Study Card Deck',
      shortDescription: 'Quick cards for common early-game shapes.',
      description:
        'A compact card deck for reviewing piece placement and opening ideas before play. Good for short daily practice sessions.',
      material: 'Matte heavy paper',
      dimensions: '48 cards',
      details: ['Double-sided print', 'Brass ring included', 'Easy to carry'],
    },
  },
  {
    id: 'premium-floor-board',
    slug: 'premium-floor-board',
    priceVnd: 7200000,
    image: 'premium-floor-board',
    imageAlt: {
      vi: 'Bàn shogi chân thấp cao cấp',
      en: 'Premium low-leg shogi board',
    },
    visual: { kind: 'board', mark: '玉', wood: '#7f4628', woodDark: '#20110c' },
    vi: {
      name: 'Bàn Chân Thấp Premium',
      shortDescription: 'Dáng bàn truyền thống cho phòng trà hoặc sưu tầm.',
      description:
        'Bàn chân thấp tạo dáng cổ điển khi chơi trên chiếu hoặc bàn thấp. Mặt gỗ dày, chân chắc và đường kẻ tinh tế dành cho không gian trang trọng.',
      material: 'Gỗ shin-kaya, chân gỗ nguyên khối',
      dimensions: '36 x 33 x 12 cm',
      details: ['Dáng truyền thống', 'Mặt bàn dày', 'Kèm hộp giấy bảo quản'],
    },
    en: {
      name: 'Premium Low-Leg Board',
      shortDescription: 'Traditional floor-board form for tea rooms or display.',
      description:
        'A low-leg board made for tatami-style play and collectible rooms. It has a thick top, stable legs, and refined grid lines.',
      material: 'Shin-kaya top, solid wood legs',
      dimensions: '36 x 33 x 12 cm',
      details: ['Traditional silhouette', 'Thick playing surface', 'Storage box included'],
    },
  },
  {
    id: 'student-shogi-set',
    slug: 'student-shogi-set',
    priceVnd: 1180000,
    image: 'student-shogi-set',
    imageAlt: {
      vi: 'Bộ shogi học sinh gồm bàn và quân',
      en: 'Student shogi board and pieces set',
    },
    visual: { kind: 'set', mark: '歩', wood: '#b06d3d', woodDark: '#3d2419' },
    vi: {
      name: 'Bộ Shogi Học Sinh',
      shortDescription: 'Combo bàn mỏng và quân in cho người mới học.',
      description:
        'Bộ đầy đủ để bắt đầu học shogi tại nhà: bàn mỏng dễ cất, quân in rõ, giá vừa phải và không cần mua thêm phụ kiện.',
      material: 'Bàn gỗ ép, quân in',
      dimensions: '33 x 30 x 1.2 cm',
      details: ['Đủ bàn và 40 quân', 'Dễ đọc cho người mới', 'Tối ưu chi phí'],
    },
    en: {
      name: 'Student Shogi Set',
      shortDescription: 'Thin board and printed pieces for new learners.',
      description:
        'A complete starter set for home study: easy-to-store board, readable printed pieces, and no extra accessories required.',
      material: 'Pressed wood board, printed pieces',
      dimensions: '33 x 30 x 1.2 cm',
      details: ['Board plus 40 pieces', 'Readable for beginners', 'Budget-friendly'],
    },
  },
  {
    id: 'silk-piece-pouch',
    slug: 'silk-piece-pouch',
    priceVnd: 460000,
    image: 'silk-piece-pouch',
    imageAlt: {
      vi: 'Túi lụa đựng quân shogi',
      en: 'Silk pouch for shogi pieces',
    },
    visual: { kind: 'accessory', mark: '銀', wood: '#7a1f1f', woodDark: '#241414' },
    vi: {
      name: 'Túi Lụa Đựng Quân',
      shortDescription: 'Túi mềm bảo vệ bộ quân khi mang đi.',
      description:
        'Túi lụa dây rút với lớp lót mềm, dùng cho bộ quân rời hoặc phụ kiện nhỏ. Tông đỏ son giúp set cờ có điểm nhấn cổ điển.',
      material: 'Lụa pha cotton, dây rút',
      dimensions: '16 x 18 cm',
      details: ['Lót mềm bên trong', 'Dây rút chắc', 'Vừa một bộ 40 quân'],
    },
    en: {
      name: 'Silk Piece Pouch',
      shortDescription: 'A soft pouch for carrying piece sets.',
      description:
        'A drawstring silk-blend pouch with soft lining for pieces or small accessories. The vermilion tone adds a classic accent.',
      material: 'Silk-cotton blend, drawstring',
      dimensions: '16 x 18 cm',
      details: ['Soft inner lining', 'Secure drawstring', 'Fits one 40-piece set'],
    },
  },
  {
    id: 'scorebook-indigo',
    slug: 'scorebook-indigo',
    priceVnd: 260000,
    image: 'scorebook-indigo',
    imageAlt: {
      vi: 'Sổ ghi ván shogi màu indigo',
      en: 'Indigo shogi scorebook',
    },
    visual: { kind: 'book', mark: '桂', wood: '#24476f', woodDark: '#0f1d2d' },
    vi: {
      name: 'Sổ Ghi Ván Indigo',
      shortDescription: 'Sổ kifu gọn để lưu lại ván đấu và bài học.',
      description:
        'Sổ ghi ván có mẫu kifu đơn giản, đủ khoảng trống cho ghi chú. Bìa indigo và giấy ngà tạo cảm giác cổ điển khi luyện tập.',
      material: 'Giấy ngà, bìa dày',
      dimensions: '80 trang',
      details: ['Mẫu ghi nước đi rõ', 'Có ô ghi nhận xét', 'Gáy khâu chỉ'],
    },
    en: {
      name: 'Indigo Scorebook',
      shortDescription: 'Compact kifu notebook for games and lessons.',
      description:
        'A scorebook with a simple kifu template and room for notes. Indigo cover and warm paper give practice a classic feel.',
      material: 'Ivory paper, heavy cover',
      dimensions: '80 pages',
      details: ['Clear move template', 'Space for comments', 'Thread-bound spine'],
    },
  },
  {
    id: 'koma-stand-pair',
    slug: 'koma-stand-pair',
    priceVnd: 880000,
    image: 'koma-stand-pair',
    imageAlt: {
      vi: 'Cặp khay đặt quân bắt được',
      en: 'Pair of captured-piece stands',
    },
    visual: { kind: 'accessory', mark: '金', wood: '#89512f', woodDark: '#321b12' },
    vi: {
      name: 'Cặp Khay Komadai',
      shortDescription: 'Khay đặt quân bắt được, cùng tông với bàn gỗ.',
      description:
        'Cặp komadai giúp ván đấu gọn gàng và đúng nghi thức. Mặt khay hơi nhám để quân không trượt khi đặt cạnh bàn.',
      material: 'Gỗ sồi nhuộm màu',
      dimensions: '12 x 12 x 2 cm mỗi khay',
      details: ['Bán theo cặp', 'Mặt khay ít trượt', 'Tông gỗ ấm dễ phối'],
    },
    en: {
      name: 'Komadai Stand Pair',
      shortDescription: 'Captured-piece stands in a warm wood tone.',
      description:
        'A pair of komadai stands that keep captured pieces tidy and ceremonial. The lightly textured top helps pieces stay in place.',
      material: 'Stained oak wood',
      dimensions: '12 x 12 x 2 cm each',
      details: ['Sold as a pair', 'Low-slip surface', 'Easy warm-wood pairing'],
    },
  },
  {
    id: 'mini-shogi-set',
    slug: 'mini-shogi-set',
    priceVnd: 690000,
    image: 'mini-shogi-set',
    imageAlt: {
      vi: 'Bộ mini shogi',
      en: 'Mini shogi set',
    },
    visual: { kind: 'set', mark: '角', wood: '#c18a4f', woodDark: '#60351f' },
    vi: {
      name: 'Bộ Mini Shogi',
      shortDescription: 'Phiên bản nhỏ để giới thiệu luật chơi nhanh.',
      description:
        'Bộ mini shogi phù hợp làm quà hoặc dùng trong workshop. Kích thước nhỏ nhưng vẫn giữ hình dáng quân truyền thống.',
      material: 'Gỗ ép phủ mờ',
      dimensions: '20 x 18 cm',
      details: ['Dễ dạy luật nhanh', 'Hộp giấy cứng', 'Phù hợp làm quà'],
    },
    en: {
      name: 'Mini Shogi Set',
      shortDescription: 'A small format for quick rule introductions.',
      description:
        'A mini shogi set suited for gifts and workshops. The compact size still keeps the traditional wedge-shaped pieces.',
      material: 'Matte pressed wood',
      dimensions: '20 x 18 cm',
      details: ['Good for quick teaching', 'Rigid paper box', 'Gift friendly'],
    },
  },
  {
    id: 'kaya-board-care-oil',
    slug: 'kaya-board-care-oil',
    priceVnd: 360000,
    image: 'kaya-board-care-oil',
    imageAlt: {
      vi: 'Dầu dưỡng bàn cờ gỗ',
      en: 'Wood board care oil',
    },
    visual: { kind: 'accessory', mark: '香', wood: '#d1b072', woodDark: '#6d4a25' },
    vi: {
      name: 'Dầu Dưỡng Bàn Gỗ',
      shortDescription: 'Dưỡng bề mặt bàn cờ, giữ vân gỗ ấm và bền.',
      description:
        'Dầu dưỡng dùng định kỳ cho bàn gỗ tự nhiên. Công thức nhẹ, không tạo lớp bóng dày và đi kèm khăn lau cotton.',
      material: 'Dầu thực vật tinh luyện',
      dimensions: '50 ml',
      details: ['Không mùi gắt', 'Kèm khăn cotton', 'Dùng cho bàn gỗ tự nhiên'],
    },
    en: {
      name: 'Wood Board Care Oil',
      shortDescription: 'Maintains the warm grain of natural wood boards.',
      description:
        'A light care oil for natural wood boards. It avoids a heavy glossy layer and includes a cotton wiping cloth.',
      material: 'Refined plant oil',
      dimensions: '50 ml',
      details: ['No harsh scent', 'Cotton cloth included', 'For natural wood boards'],
    },
  },
  {
    id: 'lesson-demo-board',
    slug: 'lesson-demo-board',
    priceVnd: 1680000,
    image: 'lesson-demo-board',
    imageAlt: {
      vi: 'Bảng demo shogi treo tường',
      en: 'Wall demo shogi board',
    },
    visual: { kind: 'board', mark: '飛', wood: '#5d6a42', woodDark: '#243017' },
    vi: {
      name: 'Bảng Demo Treo Tường',
      shortDescription: 'Bảng nam châm lớn dành cho lớp học hoặc CLB.',
      description:
        'Bảng demo giúp giảng thế cờ trước nhóm người học. Quân nam châm lớn, dễ nhìn từ xa và cuộn gọn sau buổi học.',
      material: 'Bảng vinyl nam châm',
      dimensions: '70 x 64 cm',
      details: ['Quân lớn dễ quan sát', 'Có dây treo', 'Cuộn gọn sau giờ học'],
    },
    en: {
      name: 'Wall Demo Board',
      shortDescription: 'Large magnetic board for classes and clubs.',
      description:
        'A demonstration board for teaching positions to a group. Large magnetic pieces are visible from a distance and the board rolls up after class.',
      material: 'Magnetic vinyl board',
      dimensions: '70 x 64 cm',
      details: ['Large visible pieces', 'Hanging cord included', 'Rolls up for storage'],
    },
  },
  {
    id: 'gift-set-sumi',
    slug: 'gift-set-sumi',
    priceVnd: 2490000,
    image: 'gift-set-sumi',
    imageAlt: {
      vi: 'Bộ quà tặng shogi tông sumi',
      en: 'Sumi-toned shogi gift set',
    },
    visual: { kind: 'set', mark: '玉', wood: '#2f2a27', woodDark: '#0f0d0c' },
    vi: {
      name: 'Gift Set Sumi',
      shortDescription: 'Bàn, quân, khăn lót và hộp giấy theo tông mực trầm.',
      description:
        'Bộ quà tặng cân bằng giữa tính thực dụng và thẩm mỹ. Tông sumi trầm, khăn lót indigo và bao bì giấy ngà tạo cảm giác chỉn chu.',
      material: 'Bàn gỗ, quân in, khăn cotton',
      dimensions: 'Hộp 38 x 34 x 8 cm',
      details: ['Đóng hộp sẵn để tặng', 'Tông màu đồng bộ', 'Kèm thiệp nhỏ'],
    },
    en: {
      name: 'Sumi Gift Set',
      shortDescription: 'Board, pieces, mat, and paper box in dark ink tones.',
      description:
        'A gift set that balances usefulness and presentation. Dark sumi tones, indigo mat, and ivory packaging create a thoughtful finish.',
      material: 'Wood board, printed pieces, cotton mat',
      dimensions: 'Box 38 x 34 x 8 cm',
      details: ['Ready for gifting', 'Coordinated color story', 'Small message card included'],
    },
  },
  {
    id: 'antique-display-stand',
    slug: 'antique-display-stand',
    priceVnd: 740000,
    image: 'antique-display-stand',
    imageAlt: {
      vi: 'Kệ trưng bày bàn shogi',
      en: 'Antique-style shogi display stand',
    },
    visual: { kind: 'accessory', mark: '金', wood: '#6a3c27', woodDark: '#25150e' },
    vi: {
      name: 'Kệ Trưng Bày Antique',
      shortDescription: 'Kệ gỗ nghiêng nhẹ để trưng bàn hoặc bộ quân đẹp.',
      description:
        'Kệ trưng bày giúp bàn cờ hoặc hộp quân trở thành điểm nhấn trong phòng. Dáng nghiêng nhẹ, tháo lắp nhanh và không chiếm nhiều chỗ.',
      material: 'Gỗ sồi nhuộm nâu',
      dimensions: '28 x 18 x 12 cm',
      details: ['Góc nghiêng ổn định', 'Tháo lắp không cần vít', 'Phù hợp kệ sách'],
    },
    en: {
      name: 'Antique Display Stand',
      shortDescription: 'A gently angled wooden stand for boards or boxes.',
      description:
        'A display stand that turns a board or piece box into a room accent. It has a gentle angle, quick assembly, and a compact footprint.',
      material: 'Brown-stained oak',
      dimensions: '28 x 18 x 12 cm',
      details: ['Stable viewing angle', 'Tool-free assembly', 'Bookshelf friendly'],
    },
  },
]

export const featuredProducts = products.slice(0, 4)

export function getProductBySlug(slug: string | undefined) {
  return products.find((product) => product.slug === slug)
}
