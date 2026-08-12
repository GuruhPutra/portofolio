const translations = {
  en: {
    // Navbar
    "nav_about": "About Me",
    "nav_portfolio": "Portfolio",
    "nav_contact": "Contact Me",

    // Hero
    "hero_welcome": "Welcome to",
    "hero_explore": "Explore",
    
    // About
    "about_title": "About Me",
    "about_subtitle": "Transforming ideas into digital experiences",
    "about_greeting": "Hello, I'm <br>Guruh Putra Mahendra, CNA",
    "about_desc": "I'm an information technology student with a keen interest in <span class=\"text-accent\">Graphic Designer</span>, <span class=\"text-accent\">UI/UX Designer</span>, <span class=\"text-accent\">Web Developer</span>, and <span class=\"text-accent\">Network Administrator</span>. I focus on creating engaging digital experiences and always strive to provide the best solutions in every project I work on.",
    "about_cv": "Download CV",
    "about_project": "My Project",

    // Portfolio Index
    "port_title": "Portfolio Showcase",
    "port_desc": "Explore my journey through projects, certifications, and technical expertise. Each <br> section represents a milestone in my continuous learning path.",
    "tab_projects": "Projects",
    "tab_certs": "Certificates",
    "tab_tools": "Tools",
    "proj_based": "Project Based",
    "case_based": "Case Based",
    "btn_details": "Details <i class=\"fa-solid fa-arrow-right ms-1\"></i>",
    "btn_view_cert": "<i class=\"fa-solid fa-maximize me-2\"></i>View Certificate",
    
    // Contact Index
    "contact_title": "Get In Touch",
    "contact_desc": "Let's collaborate on your next amazing project. I'm always open to new opportunities.",
    "contact_ig_desc": "Follow for latest designs and updates",
    "contact_ig_link": "Visit Profile <i class=\"fas fa-arrow-right ms-2\"></i>",
    "contact_in_desc": "Connect with me professionally",
    "contact_in_link": "View Profile <i class=\"fas fa-arrow-right ms-2\"></i>",
    "contact_em_desc": "Send me a message",
    "contact_em_link": "Send Email <i class=\"fas fa-arrow-right ms-2\"></i>",
    
    // Footer
    "footer_rights": " Guruh Putra Mahendra. All rights reserved.",

    // Projects Common
    "back_to_portfolio": "<i class=\"fas fa-arrow-left\"></i> Back to Portfolio",
    "tools_used": "<i class=\"fas fa-code\"></i> Tools Used",
    "view_project": "<i class=\"fas fa-eye overlay-icon\"></i><span>View</span>",
    "reflection_title": "Reflection",

    // Projects Data
    "proj_geteksi_desc": "This project focused on the collaborative design of an Instagram feed for the GETEKSI event as a promotional and communication medium across pre-event, live event, and post-event phases. Using Adobe Photoshop, the design emphasized visual consistency through balanced color schemes, typography, and clear information hierarchy. The objective was to deliver event information clearly while strengthening visual identity, and the increased engagement indicated that the strategy successfully attracted audience attention and supported the event’s promotional goals.",
    "proj_geteksi_feat_1": "The GETEKSI project focused on collaboratively developing a cohesive Instagram feed for event promotion and documentation, where my role involved designing visual layouts in Adobe Photoshop and ensuring consistency across posts while adapting the design to different event phases.",
    "proj_geteksi_feat_2": "This project demonstrated that strategic and consistent Instagram feed design significantly influences audience perception and engagement, while highlighting the importance of clear visual communication, shared design direction, and collaboration in delivering effective messages beyond aesthetics.",
    "proj_geteksi_feat_3": "Moving forward, I aim to enhance my social media design expertise through data-driven analysis and advanced visual storytelling, building on the GETEKSI project as a strong foundation for continued academic and professional development.",
    
    "proj_himaprodi_desc": "This project involved designing and managing the Instagram feed for HIMAPRODI TI as part of the KOMINFO division, serving as an official digital communication platform for organizational information, activity promotion, and event commemoration. The design emphasized visual consistency, clear information hierarchy, and alignment with the organization’s identity to ensure professional and effective audience communication.",
    "proj_himaprodi_feat_1": "As a member of the KOMINFO division, I was responsible for designing Instagram feed content for HIMAPRODI TI, focusing on visual layout creation, content structure, and maintaining consistency in color, typography, and overall design to effectively communicate organizational information through Instagram",
    "proj_himaprodi_feat_2": "This project strengthened my understanding of the strategic role of social media design in shaping organizational image and credibility, while highlighting how consistent visual design enhances trust, engagement, and clarity of communication in alignment with organizational goals.",
    "proj_himaprodi_feat_3": "Moving forward, I aim to strengthen my social media design skills through audience-centered and data-informed approaches, using engagement analysis to refine content effectiveness and support continued growth in visual communication and digital media design.",
    
    "proj_infinity_desc": "This project focused on designing an Instagram feed for the INFINITY event to support promotion and digital communication, emphasizing a cohesive visual identity that reflected the event’s theme and core messages. The design prioritized visual consistency, clear information hierarchy, and structured layouts to ensure a professional and engaging Instagram presence.",
    "proj_infinity_feat_1": "The INFINITY project involved designing a structured and cohesive Instagram feed for event promotion, focusing on content planning, visual composition, and alignment of posts to reflect the event’s concept while maintaining clarity and visual harmony.",
    "proj_infinity_feat_2": "This project demonstrated the strategic importance of cohesive Instagram feed design in strengthening event branding, enhancing professionalism, improving message clarity, and supporting holistic visual storytelling rather than isolated post creation.",
    "proj_infinity_feat_3": "Moving forward, I aim to refine my social media and event design skills through audience-centered, performance-driven approaches by leveraging engagement analysis to inform more strategic design decisions in future academic and professional projects.",
    
    "proj_vishire_desc": "VISHIRE is a mobile platform application developed for a User Experience course, designed to centralize various design services in a practical, well-structured, and accessible interface. Originating from my proposed concept and refined through team collaboration, the application adopts a modern dark-themed visual style with contrasting accents to convey a professional and creative impression. I was responsible for the UI/UX design, including layout structuring, color and typography selection, and ensuring visual consistency from the login page to the homepage to support intuitive navigation and efficient user interaction.",
    "proj_vishire_feat_1": "The VISHIRE project involved collaboratively designing a mobile UI/UX for a centralized design services platform, where I initiated the core concept and contributed as a UI/UX designer by structuring layouts and user flows in Figma and refining visual elements using Adobe Photoshop.",
    "proj_vishire_feat_2": "This project strengthened my understanding of the strategic impact of UI/UX design on user perception and professionalism, while reinforcing the responsibility of translating an initial concept into a coherent, consistent, and user-centered design vision aligned with both user needs and academic objectives.",
    "proj_vishire_feat_3": "Moving forward, I aim to enhance my UI/UX competencies through usability testing and experience evaluation while deepening my proficiency in Figma and Adobe Photoshop, using the VISHIRE project as a foundation for more active leadership in user-centered digital service design.",
    
    "proj_weather_desc": "This project involved producing a promotional video for a Weather App developed in a group-based application assignment, aimed at introducing the app, showcasing its core features, and communicating its benefits through engaging visual storytelling. I was responsible for editing and producing the video, focusing on clarity, pacing, and visual coherence to ensure the content accurately represented the application and enhanced its overall presentation and appeal.",
    "proj_weather_feat_1": "This project strengthened my ability to produce a clear and engaging promotional video by applying effective visual storytelling, pacing, and coherence to accurately represent the Weather App and enhance its overall appeal.",
    "proj_weather_feat_2": "This experience enhanced my understanding of how strategic video content shapes user perception, emphasizing that effective editing requires clear messaging, structured storytelling, and strong alignment with the application’s features through collaborative teamwork.",
    "proj_weather_feat_3": "Moving forward, I aim to advance my video editing and digital promotion skills through deeper exploration of storytelling, motion graphics, and user-focused strategies, using this project as a foundation for more strategic multimedia communication in future academic and professional digital product initiatives.",
    
    "proj_cisco_desc": "This project involves the design and simulation of an inter-building computer network using Cisco Packet Tracer, where two separate LANs are interconnected through routers using efficient IP subnetting and static routing to enable reliable data communication.",
    "proj_cisco_feat_1": "This project involved designing and simulating an inter-building network by configuring routers, switches, PCs, and servers, applying subnetting and static routing to enable communication between two separate LANs.",
    "proj_cisco_feat_2": "The project strengthened practical understanding of IP addressing, subnetting, and routing, while highlighting the importance of accurate configuration and troubleshooting in ensuring reliable network connectivity.",
    "proj_cisco_feat_3": "Future improvements include implementing dynamic routing, VLANs, DHCP, and basic security features to enhance scalability, efficiency, and real-world applicability of the network design.",
  },
  id: {
    // Navbar
    "nav_about": "Tentang Saya",
    "nav_portfolio": "Portofolio",
    "nav_contact": "Hubungi Saya",

    // Hero
    "hero_welcome": "Selamat datang di",
    "hero_explore": "Jelajahi",
    
    // About
    "about_title": "Tentang Saya",
    "about_subtitle": "Mengubah ide menjadi pengalaman digital",
    "about_greeting": "Halo, Saya <br>Guruh Putra Mahendra, CNA",
    "about_desc": "Saya adalah mahasiswa teknologi informasi dengan ketertarikan pada <span class=\"text-accent\">Desain Grafis</span>, <span class=\"text-accent\">Desain UI/UX</span>, <span class=\"text-accent\">Web Developer</span>, dan <span class=\"text-accent\">Administrator Jaringan</span>. Saya berfokus untuk menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.",
    "about_cv": "Unduh CV",
    "about_project": "Proyek Saya",

    // Portfolio Index
    "port_title": "Pameran Portofolio",
    "port_desc": "Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis. Setiap <br> bagian mewakili pencapaian dalam proses belajar saya.",
    "tab_projects": "Proyek",
    "tab_certs": "Sertifikat",
    "tab_tools": "Alat",
    "proj_based": "Berbasis Proyek",
    "case_based": "Berbasis Kasus",
    "btn_details": "Detail <i class=\"fa-solid fa-arrow-right ms-1\"></i>",
    "btn_view_cert": "<i class=\"fa-solid fa-maximize me-2\"></i>Lihat Sertifikat",
    
    // Contact Index
    "contact_title": "Hubungi Saya",
    "contact_desc": "Mari berkolaborasi pada proyek luar biasa Anda selanjutnya. Saya selalu terbuka untuk peluang baru.",
    "contact_ig_desc": "Ikuti untuk desain dan pembaruan terbaru",
    "contact_ig_link": "Kunjungi Profil <i class=\"fas fa-arrow-right ms-2\"></i>",
    "contact_in_desc": "Terhubung dengan saya secara profesional",
    "contact_in_link": "Lihat Profil <i class=\"fas fa-arrow-right ms-2\"></i>",
    "contact_em_desc": "Kirim saya pesan",
    "contact_em_link": "Kirim Email <i class=\"fas fa-arrow-right ms-2\"></i>",
    
    // Footer
    "footer_rights": " Guruh Putra Mahendra. Hak cipta dilindungi.",

    // Projects Common
    "back_to_portfolio": "<i class=\"fas fa-arrow-left\"></i> Kembali ke Portofolio",
    "tools_used": "<i class=\"fas fa-code\"></i> Alat yang Digunakan",
    "view_project": "<i class=\"fas fa-eye overlay-icon\"></i><span>Lihat</span>",
    "reflection_title": "Refleksi",

    // Projects Data
    "proj_geteksi_desc": "Proyek ini berfokus pada desain kolaboratif feed Instagram untuk acara GETEKSI sebagai media promosi dan komunikasi di seluruh fase pra-acara, acara langsung, dan pasca-acara. Menggunakan Adobe Photoshop, desain menekankan konsistensi visual melalui skema warna yang seimbang, tipografi, dan hierarki informasi yang jelas. Tujuannya adalah untuk menyampaikan informasi acara dengan jelas sekaligus memperkuat identitas visual, dan peningkatan interaksi menunjukkan bahwa strategi tersebut berhasil menarik perhatian audiens dan mendukung tujuan promosi acara.",
    "proj_geteksi_feat_1": "Proyek GETEKSI berfokus pada pengembangan feed Instagram yang kohesif secara kolaboratif untuk promosi dan dokumentasi acara, di mana peran saya melibatkan desain tata letak visual di Adobe Photoshop dan memastikan konsistensi di seluruh postingan sambil menyesuaikan desain ke berbagai fase acara.",
    "proj_geteksi_feat_2": "Proyek ini menunjukkan bahwa desain feed Instagram yang strategis dan konsisten sangat memengaruhi persepsi dan keterlibatan audiens, sekaligus menyoroti pentingnya komunikasi visual yang jelas, arahan desain bersama, dan kolaborasi dalam menyampaikan pesan efektif di luar sekadar estetika.",
    "proj_geteksi_feat_3": "Ke depan, saya bertujuan untuk meningkatkan keahlian desain media sosial saya melalui analisis berbasis data dan penceritaan visual tingkat lanjut, menjadikan proyek GETEKSI sebagai fondasi kuat untuk pengembangan akademis dan profesional lebih lanjut.",
    
    "proj_himaprodi_desc": "Proyek ini mencakup desain dan pengelolaan feed Instagram untuk HIMAPRODI TI sebagai bagian dari divisi KOMINFO, berfungsi sebagai platform komunikasi digital resmi untuk informasi organisasi, promosi kegiatan, dan peringatan hari besar. Desain menekankan konsistensi visual, hierarki informasi yang jelas, dan keselarasan dengan identitas organisasi untuk memastikan komunikasi audiens yang profesional dan efektif.",
    "proj_himaprodi_feat_1": "Sebagai anggota divisi KOMINFO, saya bertanggung jawab untuk mendesain konten feed Instagram HIMAPRODI TI, dengan fokus pada pembuatan tata letak visual, struktur konten, dan mempertahankan konsistensi warna, tipografi, dan desain keseluruhan untuk mengomunikasikan informasi organisasi secara efektif melalui Instagram.",
    "proj_himaprodi_feat_2": "Proyek ini memperkuat pemahaman saya tentang peran strategis desain media sosial dalam membentuk citra dan kredibilitas organisasi, sekaligus menyoroti bagaimana desain visual yang konsisten meningkatkan kepercayaan, keterlibatan, dan kejelasan komunikasi sejalan dengan tujuan organisasi.",
    "proj_himaprodi_feat_3": "Ke depan, saya bertujuan untuk memperkuat keterampilan desain media sosial saya melalui pendekatan yang berpusat pada audiens dan berbasis informasi data, menggunakan analisis interaksi untuk menyempurnakan efektivitas konten dan mendukung pertumbuhan berkelanjutan dalam komunikasi visual dan desain media digital.",
    
    "proj_infinity_desc": "Proyek ini berfokus pada desain feed Instagram untuk acara INFINITY guna mendukung promosi dan komunikasi digital, menekankan identitas visual kohesif yang mencerminkan tema dan pesan utama acara. Desain memprioritaskan konsistensi visual, hierarki informasi yang jelas, dan tata letak terstruktur untuk memastikan kehadiran Instagram yang profesional dan menarik.",
    "proj_infinity_feat_1": "Proyek INFINITY melibatkan perancangan feed Instagram yang terstruktur dan kohesif untuk promosi acara, dengan fokus pada perencanaan konten, komposisi visual, dan penyelarasan postingan untuk mencerminkan konsep acara sambil menjaga kejelasan dan harmoni visual.",
    "proj_infinity_feat_2": "Proyek ini menunjukkan pentingnya strategi desain feed Instagram yang kohesif dalam memperkuat branding acara, meningkatkan profesionalisme, memperbaiki kejelasan pesan, dan mendukung penceritaan visual secara menyeluruh, bukan sekadar pembuatan postingan yang terisolasi.",
    "proj_infinity_feat_3": "Ke depan, saya bertujuan untuk menyempurnakan keterampilan desain media sosial dan acara saya melalui pendekatan yang berpusat pada audiens dan digerakkan oleh performa, dengan memanfaatkan analisis keterlibatan untuk mengambil keputusan desain yang lebih strategis dalam proyek akademis dan profesional di masa mendatang.",
    
    "proj_vishire_desc": "VISHIRE adalah aplikasi platform mobile yang dikembangkan untuk mata kuliah User Experience, dirancang untuk memusatkan berbagai layanan desain dalam antarmuka yang praktis, terstruktur dengan baik, dan mudah diakses. Berasal dari konsep yang saya usulkan dan disempurnakan melalui kolaborasi tim, aplikasi ini mengadopsi gaya visual bertema gelap modern dengan aksen kontras untuk memberikan kesan profesional dan kreatif. Saya bertanggung jawab atas desain UI/UX, termasuk penataan tata letak, pemilihan warna dan tipografi, dan memastikan konsistensi visual dari halaman login hingga beranda untuk mendukung navigasi intuitif dan interaksi pengguna yang efisien.",
    "proj_vishire_feat_1": "Proyek VISHIRE melibatkan desain kolaboratif UI/UX seluler untuk platform layanan desain terpusat, di mana saya memprakarsai konsep inti dan berkontribusi sebagai desainer UI/UX dengan menyusun tata letak dan alur pengguna di Figma serta menyempurnakan elemen visual menggunakan Adobe Photoshop.",
    "proj_vishire_feat_2": "Proyek ini memperkuat pemahaman saya tentang dampak strategis desain UI/UX terhadap persepsi dan profesionalisme pengguna, sambil mempertegas tanggung jawab menerjemahkan konsep awal menjadi visi desain yang koheren, konsisten, dan berpusat pada pengguna, selaras dengan kebutuhan pengguna dan tujuan akademis.",
    "proj_vishire_feat_3": "Ke depan, saya bertujuan untuk meningkatkan kompetensi UI/UX saya melalui pengujian kegunaan dan evaluasi pengalaman sembari memperdalam kemahiran saya di Figma dan Adobe Photoshop, menjadikan proyek VISHIRE sebagai landasan kepemimpinan yang lebih aktif dalam desain layanan digital yang berpusat pada pengguna.",
    
    "proj_weather_desc": "Proyek ini melibatkan pembuatan video promosi untuk Aplikasi Cuaca yang dikembangkan dalam tugas aplikasi berbasis kelompok, bertujuan untuk memperkenalkan aplikasi, memamerkan fitur utamanya, dan mengomunikasikan manfaatnya melalui penyampaian cerita visual yang menarik. Saya bertanggung jawab atas pengeditan dan produksi video, berfokus pada kejelasan, tempo, dan koherensi visual untuk memastikan konten secara akurat mewakili aplikasi dan meningkatkan presentasi dan daya tarik keseluruhannya.",
    "proj_weather_feat_1": "Proyek ini memperkuat kemampuan saya untuk memproduksi video promosi yang jelas dan menarik dengan menerapkan penceritaan visual yang efektif, tempo, dan koherensi untuk merepresentasikan Aplikasi Cuaca secara akurat dan meningkatkan daya tarik secara keseluruhan.",
    "proj_weather_feat_2": "Pengalaman ini meningkatkan pemahaman saya tentang bagaimana konten video yang strategis membentuk persepsi pengguna, menekankan bahwa pengeditan yang efektif membutuhkan penyampaian pesan yang jelas, penceritaan yang terstruktur, dan penyelarasan yang kuat dengan fitur-fitur aplikasi melalui kerja sama tim yang kolaboratif.",
    "proj_weather_feat_3": "Ke depan, saya bertujuan untuk memajukan keterampilan pengeditan video dan promosi digital saya melalui eksplorasi penceritaan yang lebih mendalam, grafik gerak, dan strategi yang berfokus pada pengguna, menjadikan proyek ini sebagai landasan komunikasi multimedia yang lebih strategis dalam inisiatif produk digital akademis dan profesional di masa depan.",
    
    "proj_cisco_desc": "Proyek ini melibatkan perancangan dan simulasi jaringan komputer antar gedung menggunakan Cisco Packet Tracer, di mana dua LAN terpisah dihubungkan melalui router menggunakan subnetting IP yang efisien dan routing statis untuk memungkinkan komunikasi data yang andal.",
    "proj_cisco_feat_1": "Proyek ini melibatkan perancangan dan simulasi jaringan antar gedung dengan mengonfigurasi router, switch, PC, dan server, serta menerapkan subnetting dan routing statis untuk memungkinkan komunikasi antara dua LAN yang terpisah.",
    "proj_cisco_feat_2": "Proyek ini memperkuat pemahaman praktis tentang pengalamatan IP, subnetting, dan routing, serta menyoroti pentingnya konfigurasi dan pemecahan masalah yang akurat dalam memastikan konektivitas jaringan yang dapat diandalkan.",
    "proj_cisco_feat_3": "Perbaikan ke depannya meliputi penerapan perutean dinamis, VLAN, DHCP, dan fitur keamanan dasar guna meningkatkan skalabilitas, efisiensi, dan penerapan desain jaringan di dunia nyata."
  }
};
