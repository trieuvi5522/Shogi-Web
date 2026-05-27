import type { TimelineItem } from '../types'

const blogItems: TimelineItem[] = [
  {
    id: 'spring-shogi-meetup',
    kind: 'blog',
    slug: 'spring-shogi-meetup',
    date: '2026-06-08',
    visual: { mark: '歩', tone: '#9b5a32', toneDark: '#3a2117', accent: '#a43e2d' },
    vi: {
      title: 'Thông báo: Buổi gặp Shogi mùa hè tại Otter Shogi',
      excerpt: 'Lịch hoạt động sắp tới dành cho người mới, khách quen và những ai muốn thử shogi lần đầu.',
      category: 'Thông báo hoạt động',
      author: 'Otter Shogi Team',
      readTime: '4 phút đọc',
      seoTitle: 'Buổi gặp Shogi mùa hè tại Otter Shogi | Hoạt động Shogi',
      seoDescription:
        'Cập nhật lịch buổi gặp Shogi mùa hè tại Otter Shogi, thông tin tham gia, nội dung hướng dẫn và khu vực chơi thử cho người mới.',
      eventLabel: 'Hoạt động sắp tới',
      eventDate: '08/06/2026',
      eventTime: '15:00 - 17:30',
      eventLocation: 'Otter Shogi Studio, Hà Nội',
      eventStatus: 'Đang nhận đăng ký giữ chỗ',
      body: [
        'Otter Shogi dự kiến tổ chức một buổi gặp nhỏ vào đầu tháng 6 để mọi người có thể thử bàn cờ, học lại luật cơ bản và chơi vài ván chậm trong không khí thân mật.',
        'Không gian được chuẩn bị theo tông washi và gỗ trầm, có khu vực hướng dẫn riêng cho người mới. Bài viết này đóng vai trò như một landing page tin tức: có tiêu đề rõ, mô tả ngắn, thông tin sự kiện và nội dung dễ mở rộng để phục vụ SEO.',
        'Người tham gia không cần có kinh nghiệm trước. Shop sẽ chuẩn bị một số bộ shogi demo, gợi ý khai cuộc cơ bản và thời gian hỏi đáp sau mỗi ván.',
      ],
      details: ['Hướng dẫn luật cơ bản trong 20 phút', 'Bàn chơi thử cho nhóm 2-4 người', 'Góc chụp ảnh với bàn shogi cổ điển'],
    },
    en: {
      title: 'Announcement: Summer Shogi Meetup at Otter Shogi',
      excerpt: 'An upcoming activity for new players, regular customers, and anyone trying shogi for the first time.',
      category: 'Activity announcement',
      author: 'Otter Shogi Team',
      readTime: '4 min read',
      seoTitle: 'Summer Shogi Meetup at Otter Shogi | Shogi Activities',
      seoDescription:
        'Details for the upcoming Otter Shogi summer meetup, including participation info, beginner guidance, and trial play tables.',
      eventLabel: 'Upcoming activity',
      eventDate: 'June 8, 2026',
      eventTime: '3:00 PM - 5:30 PM',
      eventLocation: 'Otter Shogi Studio, Hanoi',
      eventStatus: 'Seat reservation open',
      body: [
        'Otter Shogi plans to host a small early-June meetup where guests can try boards, refresh the basic rules, and play slow games in a relaxed setting.',
        'The space will be prepared with warm washi and wood tones, plus a separate learning area for beginners. This page now behaves like a news landing page with a clear headline, short description, event information, and SEO-friendly article structure.',
        'No previous experience is required. The shop will prepare several demo shogi sets, basic opening suggestions, and time for post-game questions.',
      ],
      details: ['20-minute beginner rule session', 'Trial boards for groups of 2-4', 'Classic shogi photo corner'],
    },
  },
  {
    id: 'koma-care-workshop',
    kind: 'blog',
    slug: 'koma-care-workshop',
    date: '2026-04-22',
    visual: { mark: '金', tone: '#7f4628', toneDark: '#20110c', accent: '#c29a53' },
    vi: {
      title: 'Workshop chăm sóc quân gỗ',
      excerpt: 'Gợi ý cách lau, cất và giữ bộ quân shogi luôn sạch đẹp sau nhiều ván chơi.',
      category: 'Hướng dẫn',
      author: 'Otter Shogi Team',
      readTime: '3 phút đọc',
      seoTitle: 'Workshop chăm sóc quân gỗ Shogi | Otter Shogi',
      seoDescription:
        'Hướng dẫn cách lau, bảo quản và giữ bộ quân shogi bằng gỗ bền đẹp trong quá trình sử dụng hằng ngày.',
      eventLabel: 'Workshop mẫu',
      eventDate: '22/04/2026',
      eventTime: 'Nội dung lưu trữ',
      eventLocation: 'Otter Shogi Studio',
      eventStatus: 'Đã diễn ra',
      body: [
        'Bài viết mô phỏng một workshop nhỏ về cách chăm sóc quân gỗ: lau khô, tránh ẩm, cất trong túi mềm và kiểm tra bề mặt định kỳ.',
        'Nội dung thật sau này có thể thay bằng hình ảnh workshop, lịch đăng ký hoặc video hướng dẫn ngắn.',
      ],
      details: ['Cách lau quân bằng khăn cotton', 'Cách tránh cong vênh khi bảo quản', 'Gợi ý hộp và túi đựng phù hợp'],
    },
    en: {
      title: 'Wooden Koma Care Workshop',
      excerpt: 'Simple ways to clean, store, and keep shogi pieces beautiful after many games.',
      category: 'Guide',
      author: 'Otter Shogi Team',
      readTime: '3 min read',
      seoTitle: 'Wooden Shogi Piece Care Workshop | Otter Shogi',
      seoDescription:
        'Learn simple ways to clean, store, and keep wooden shogi pieces beautiful through daily use.',
      eventLabel: 'Sample workshop',
      eventDate: 'April 22, 2026',
      eventTime: 'Archived content',
      eventLocation: 'Otter Shogi Studio',
      eventStatus: 'Completed',
      body: [
        'This sample workshop post covers basic wooden piece care: dry wiping, avoiding humidity, storing pieces in a soft pouch, and checking the surface regularly.',
        'Later, this can be replaced with real workshop photos, registration details, or a short guide video.',
      ],
      details: ['Wiping pieces with cotton cloth', 'Preventing warping during storage', 'Choosing a box or pouch'],
    },
  },
  {
    id: 'first-tournament-corner',
    kind: 'blog',
    slug: 'first-tournament-corner',
    date: '2026-03-12',
    visual: { mark: '飛', tone: '#1d3557', toneDark: '#0e1b2d', accent: '#eadcc7' },
    vi: {
      title: 'Góc giải đấu mini cho người mới',
      excerpt: 'Một format giải đấu nhỏ, chậm rãi và dễ tham gia cho cộng đồng shogi địa phương.',
      category: 'Cộng đồng',
      author: 'Otter Shogi Team',
      readTime: '5 phút đọc',
      seoTitle: 'Giải đấu Shogi mini cho người mới | Otter Shogi',
      seoDescription:
        'Ý tưởng tổ chức giải đấu shogi mini cho người mới với format dễ tham gia, thời gian ván vừa phải và khu vực học lại thế cờ.',
      eventLabel: 'Ý tưởng hoạt động',
      eventDate: '12/03/2026',
      eventTime: 'Cập nhật sau',
      eventLocation: 'Không gian cộng đồng Otter Shogi',
      eventStatus: 'Bản nháp format',
      body: [
        'Bài hoạt động mẫu này giới thiệu ý tưởng tổ chức giải mini với số lượng người chơi nhỏ, thời gian mỗi ván vừa phải và cách tính điểm đơn giản.',
        'Trang detail có thể dùng để đăng lịch, luật tham gia, ảnh người chơi và kết quả sau mỗi buổi.',
      ],
      details: ['Format vòng tròn 8 người', 'Mỗi ván 20 phút', 'Có khu vực học lại thế cờ sau ván'],
    },
    en: {
      title: 'Beginner Mini Tournament Corner',
      excerpt: 'A small, slower, and easy-to-join tournament format for the local shogi community.',
      category: 'Community',
      author: 'Otter Shogi Team',
      readTime: '5 min read',
      seoTitle: 'Beginner Mini Shogi Tournament Format | Otter Shogi',
      seoDescription:
        'A beginner-friendly mini shogi tournament concept with approachable game time, simple scoring, and post-game review.',
      eventLabel: 'Activity concept',
      eventDate: 'March 12, 2026',
      eventTime: 'To be updated',
      eventLocation: 'Otter Shogi community space',
      eventStatus: 'Draft format',
      body: [
        'This sample activity post introduces a mini tournament idea with a small player count, approachable game time, and simple scoring.',
        'The detail page can later hold schedules, entry rules, player photos, and results after each session.',
      ],
      details: ['8-player round-robin format', '20-minute games', 'Post-game review corner'],
    },
  },
  {
    id: 'washi-display-notes',
    kind: 'blog',
    slug: 'washi-display-notes',
    date: '2026-02-04',
    visual: { mark: '香', tone: '#b8793f', toneDark: '#5a2c18', accent: '#1d3557' },
    vi: {
      title: 'Ghi chú trưng bày bàn cờ theo phong cách washi',
      excerpt: 'Một vài cách đặt bàn, khăn lót và hộp quân để góc shogi nhìn gọn và có chiều sâu hơn.',
      category: 'Góc cảm hứng',
      author: 'Otter Shogi Team',
      readTime: '3 phút đọc',
      seoTitle: 'Cách trưng bày bàn cờ Shogi phong cách Washi | Otter Shogi',
      seoDescription:
        'Gợi ý cách đặt bàn cờ, khăn lót và hộp quân để tạo một góc shogi gọn, ấm và có chiều sâu theo phong cách Nhật cổ.',
      eventLabel: 'Bài viết cảm hứng',
      eventDate: '04/02/2026',
      eventTime: 'Đọc bất kỳ lúc nào',
      eventLocation: 'Blog Otter Shogi',
      eventStatus: 'Đã đăng',
      body: [
        'Bài viết demo này gợi ý cách tạo một góc trưng bày nhỏ: chọn nền giấy hoặc vải, giữ ít vật dụng và dùng ánh sáng ấm.',
        'Nội dung phù hợp để phát triển thành blog tư vấn trưng bày sản phẩm hoặc hướng dẫn chụp ảnh cho khách hàng.',
      ],
      details: ['Ưu tiên nền ít họa tiết', 'Dùng hộp quân làm điểm nhấn', 'Giữ khoảng thở quanh bàn cờ'],
    },
    en: {
      title: 'Washi-Style Board Display Notes',
      excerpt: 'A few ways to arrange boards, mats, and piece boxes for a tidy shogi corner.',
      category: 'Inspiration',
      author: 'Otter Shogi Team',
      readTime: '3 min read',
      seoTitle: 'Washi-Style Shogi Board Display Ideas | Otter Shogi',
      seoDescription:
        'Simple styling notes for arranging a shogi board, mat, and piece box into a warm Japanese-inspired display corner.',
      eventLabel: 'Inspiration article',
      eventDate: 'February 4, 2026',
      eventTime: 'Read anytime',
      eventLocation: 'Otter Shogi Blog',
      eventStatus: 'Published',
      body: [
        'This demo article suggests building a small display corner with paper or fabric texture, restrained objects, and warm light.',
        'It can later become a styling blog post or a guide for customers photographing their own shogi setup.',
      ],
      details: ['Choose a calm backdrop', 'Use the piece box as an accent', 'Keep breathing room around the board'],
    },
  },
]

const promotionItems: TimelineItem[] = [
  {
    id: 'opening-month-gift',
    kind: 'promotion',
    slug: 'opening-month-gift',
    date: '2026-05-24',
    ctaTarget: 'products',
    visual: { mark: '玉', tone: '#a43e2d', toneDark: '#4d1712', accent: '#f4d59a' },
    vi: {
      title: 'Quà tặng tháng khai trương',
      excerpt: 'Tặng túi đựng quân lụa cho các đơn hàng combo bàn và quân trong tháng đầu tiên.',
      body: [
        'Ưu đãi demo dành cho giai đoạn mở bán: khách mua combo bàn và quân sẽ nhận thêm một túi đựng quân tông đỏ son.',
        'Trang landing page này có thể dùng để giải thích quà tặng, thời gian áp dụng và điều kiện nhận ưu đãi.',
      ],
      terms: ['Áp dụng cho combo bàn + quân', 'Số lượng quà tặng có hạn', 'Không quy đổi thành tiền mặt'],
      ctaLabel: 'Xem sản phẩm',
    },
    en: {
      title: 'Opening Month Gift',
      excerpt: 'Receive a silk piece pouch with board-and-piece combo orders during the opening month.',
      body: [
        'A demo launch promotion: customers buying a board and piece combo receive a vermilion-tone piece pouch.',
        'This landing page can later explain the gift, timing, and qualification rules.',
      ],
      terms: ['Applies to board + piece combos', 'Gift quantity is limited', 'Cannot be exchanged for cash'],
      ctaLabel: 'Shop products',
    },
  },
  {
    id: 'student-set-offer',
    kind: 'promotion',
    slug: 'student-set-offer',
    date: '2026-04-16',
    ctaTarget: 'contact',
    visual: { mark: '銀', tone: '#24476f', toneDark: '#0f1d2d', accent: '#eadcc7' },
    vi: {
      title: 'Ưu đãi bộ học sinh',
      excerpt: 'Giá dễ tiếp cận hơn cho người mới bắt đầu học shogi tại nhà hoặc câu lạc bộ.',
      body: [
        'Ưu đãi mẫu cho bộ shogi học sinh, tập trung vào nhóm khách mới học hoặc mua nhiều bộ cho lớp nhỏ.',
        'Khi có giá thật, trang này có thể bổ sung mã khuyến mãi, số lượng tối thiểu hoặc form liên hệ cho đơn nhóm.',
      ],
      terms: ['Áp dụng cho bộ Student Shogi Set', 'Có thể dùng cho đơn mua nhóm', 'Thời gian áp dụng tùy tồn kho'],
      ctaLabel: 'Liên hệ đặt nhóm',
    },
    en: {
      title: 'Student Set Offer',
      excerpt: 'A more approachable price for new players learning shogi at home or in clubs.',
      body: [
        'A sample offer for the student shogi set, aimed at new players or small class purchases.',
        'When real pricing is ready, this page can include a promo code, minimum quantity, or group-order contact flow.',
      ],
      terms: ['Applies to the Student Shogi Set', 'Can support group orders', 'Availability depends on stock'],
      ctaLabel: 'Contact for groups',
    },
  },
  {
    id: 'board-care-bundle',
    kind: 'promotion',
    slug: 'board-care-bundle',
    date: '2026-03-08',
    ctaTarget: 'products',
    visual: { mark: '桂', tone: '#89512f', toneDark: '#321b12', accent: '#c29a53' },
    vi: {
      title: 'Bundle chăm sóc bàn gỗ',
      excerpt: 'Mua bàn gỗ kèm dầu dưỡng và khăn cotton để giữ bề mặt bàn bền đẹp hơn.',
      body: [
        'Promotion placeholder này mô tả bundle chăm sóc bàn gỗ dành cho khách mua bàn dày hoặc bàn cao cấp.',
        'Trang detail có thể giải thích lợi ích của từng phụ kiện và cách dùng trong 3 bước ngắn.',
      ],
      terms: ['Áp dụng khi mua kèm bàn gỗ', 'Không áp dụng đồng thời với ưu đãi khác', 'Phụ kiện có thể thay đổi theo tồn kho'],
      ctaLabel: 'Xem combo',
    },
    en: {
      title: 'Wood Board Care Bundle',
      excerpt: 'Pair a wooden board with care oil and cotton cloth to keep the surface beautiful longer.',
      body: [
        'This promotion placeholder describes a care bundle for customers buying thick or premium wooden boards.',
        'The detail page can explain each accessory and show a short three-step care routine.',
      ],
      terms: ['Applies with selected wooden boards', 'Cannot be combined with other offers', 'Accessories may vary by stock'],
      ctaLabel: 'View bundles',
    },
  },
  {
    id: 'club-demo-board',
    kind: 'promotion',
    slug: 'club-demo-board',
    date: '2026-01-26',
    ctaTarget: 'contact',
    visual: { mark: '角', tone: '#5d6a42', toneDark: '#243017', accent: '#fffaf0' },
    vi: {
      title: 'Gói bảng demo cho câu lạc bộ',
      excerpt: 'Ưu đãi giữ chỗ cho CLB muốn dùng bảng demo treo tường trong buổi dạy shogi.',
      body: [
        'Ưu đãi mẫu này dành cho câu lạc bộ hoặc lớp học nhỏ cần bảng demo để giảng thế cờ.',
        'Có thể phát triển thành landing page cho đơn giáo dục, kèm ảnh lớp học, bảng giá và thông tin liên hệ.',
      ],
      terms: ['Dành cho CLB hoặc lớp học', 'Cần xác nhận qua email trước khi đặt', 'Số lượng bảng demo giới hạn'],
      ctaLabel: 'Liên hệ tư vấn',
    },
    en: {
      title: 'Club Demo Board Package',
      excerpt: 'A placeholder offer for clubs using wall demo boards in shogi lessons.',
      body: [
        'This sample offer is for clubs or small classes that need a demonstration board for teaching positions.',
        'It can later become an education landing page with class photos, pricing, and contact information.',
      ],
      terms: ['For clubs or classes', 'Requires email confirmation before ordering', 'Demo board stock is limited'],
      ctaLabel: 'Contact for advice',
    },
  },
]

function sortNewestFirst(items: TimelineItem[]) {
  return [...items].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export const blogPosts = sortNewestFirst(blogItems)
export const promotionPosts = sortNewestFirst(promotionItems)

export function getBlogPostBySlug(slug: string | undefined) {
  return blogPosts.find((item) => item.slug === slug)
}

export function getPromotionBySlug(slug: string | undefined) {
  return promotionPosts.find((item) => item.slug === slug)
}
