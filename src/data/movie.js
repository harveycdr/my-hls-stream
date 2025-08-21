const movies = [
  {
    id: 1,
    title: "Bố Già 2021",
    genre: "Hài, Gia đình",
    poster: "/poster/bogia.webp", // hình trong public
    episode: [
      {
        name: "Tập full",
        url: "/videos/bogia.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập full",
        url: "/videos/bogia.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Một bộ phim gia đình cảm động về tình cha con.",
  },
  {
    id: 2,
    title: "Nhà bà nữ 2023",
    genre: "Drama, Gia đình",
    poster: "/poster/nhabanu.webp", // ảnh online
    episode: [
      {
        name: "Tập full",
        url: "/videos/nhabanu.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Phim chính kịch gia đình.",
  },
  {
    id: 3,
    title: "Mai 2024",
    genre: "Tình cảm, lãng mạn",
    poster: "/poster/mai.webp",
    episode: [
      {
        name: "Tập full",
        url: "/videos/mai.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Phim tình cảm lãng mạn nhẹ nhàng.",
  },
  {
    id: 4,
    title: "Làm giàu với ma 2025",
    genre: "Hài, chính kịch",
    poster: "/poster/lamgiauvoima.webp",
    episode: [
      {
        name: "Tập full",
        url: "/videos/lamgiauvoima.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Phim Hài kịch.",
  },
  {
    id: 5,
    title: "Tiệm ăn của quỷ 2025",
    genre: "Tâm lý, kinh dị",
    poster: "/poster/tiemancuaquy.webp",
    episode: [
      {
        name: "Tập 1",
        url: "/videos/tiemancuaquy-1.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập 2",
        url: "/videos/tiemancuaquy-2.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập 3",
        url: "/videos/tiemancuaquy-3.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập 4",
        url: "/videos/tiemancuaquy-4.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập 5",
        url: "/videos/tiemancuaquy-5.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "Tập 6",
        url: "/videos/tiemancuaquy-6.m3u8", // file m3u8 trong public/videos
      },
    ],
    description:
      "Một tiệm ăn bí ẩn và người chủ tiệm trung niên thân thiện, người có khả năng thực hiện mọi ước nguyện cho thực khách thông qua những món ăn đặc biệt nhưng với cái giá phải trả là linh hồn.",
  },
  {
    id: 6,
    title: "Lật mặt",
    genre: "Tâm lý, giật gân, hài, kinh dị",
    poster: "/poster/latmat.webp",
    episode: [
      {
        name: "1 - Lật mặt",
        url: "/videos/lat-mat-1.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "2 - Phim trường",
        url: "/videos/lat-mat-2-phim-truong.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "3 - Ba chàng khuyết",
        url: "/videos/lat-mat-3-ba-chang-khuyet.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "4 - Nhà có khách",
        url: "/videos/lat-mat-4-nha-co-khach.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "5 - 48 giờ",
        url: "/videos/lat-mat-5-48h.m3u8", // file m3u8 trong public/videos
      },
      {
        name: "6 - Tấm vé định mệnh",
        url: "/videos/lat-mat-6-tam-ve-dinh-menh.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Chuỗi phim lật mặt của đạo diễn Lý Hải.",
  },
  {
    id: 7,
    title: "Tiệc trăng máu",
    genre: "Drama, Gia đình, Tình cảm",
    poster: "/poster/tiec-trang-mau.webp", // ảnh online
    episode: [
      {
        name: "Tập full",
        url: "/videos/tiec-trang-mau.m3u8", // file m3u8 trong public/videos
      },
    ],
    description:
      "Một bữa tiệc tân gia phơi bày nhiều bí mật sau chiếc điện thoại.",
  },
  {
    id: 8,
    title: "Em chưa 18",
    genre: "Drama, Học sinh",
    poster: "/poster/em-chua-18.webp", // ảnh online
    episode: [
      {
        name: "Tập full",
        url: "/videos/em-chua-18.m3u8", // file m3u8 trong public/videos
      },
    ],
    description: "Phim chính kịch gia đình.",
  },
];

export default movies;
