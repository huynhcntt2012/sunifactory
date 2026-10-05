/**
 * SUNI FACTORY — Main interactions
 * Language switching, mobile navigation, sticky header, active links,
 * scroll reveals and frontend-only form validation.
 */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const navLinks = [...document.querySelectorAll(".primary-nav ul a")];
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const languageStatus = document.querySelector("#language-status");

  /* =======================================================
     Language system
     English text remains in the HTML as the content source.
     Add another language object here to extend the website.
     ======================================================= */
  const translations = {
    vi: {
      meta: {
        title: "Suni Factory | Phát triển Phần mềm, Mobile, IoT & AI",
        description: "Suni Factory là công ty phát triển phần mềm chuyên về website, ứng dụng di động, phần mềm tùy chỉnh, tích hợp AI và giải pháp IoT ESP32.",
        keywords: "Suni Factory, phát triển phần mềm, phát triển website, ứng dụng di động, IoT, ESP32, phần mềm tùy chỉnh, tích hợp AI, công ty phần mềm Việt Nam",
        ogTitle: "Suni Factory | Phát triển Phần mềm, Mobile, IoT & AI",
        ogDescription: "Chúng tôi xây dựng các sản phẩm số có khả năng mở rộng, kết nối phần mềm, mobile, cloud và IoT.",
        locale: "vi_VN"
      },
      text: {
        "Skip to main content": "Chuyển đến nội dung chính",
        "Home": "Trang chủ",
        "About": "Giới thiệu",
        "Services": "Dịch vụ",
        "Technologies": "Công nghệ",
        "Solutions": "Giải pháp",
        "Projects": "Dự án",
        "Process": "Quy trình",
        "Contact": "Liên hệ",
        "Start a Project": "Bắt đầu dự án",
        "Software • Mobile • IoT • AI": "Phần mềm • Mobile • IoT • AI",
        "We Build Digital Products That Connect": "Chúng tôi xây dựng sản phẩm số kết nối",
        "Software, Mobile & IoT": "Phần mềm, Mobile & IoT",
        "Suni Factory helps businesses transform ideas into scalable digital products — from modern websites and mobile applications to IoT systems powered by ESP32.": "Suni Factory giúp doanh nghiệp biến ý tưởng thành sản phẩm số có khả năng mở rộng — từ website hiện đại, ứng dụng di động đến hệ thống IoT sử dụng ESP32.",
        "Start Your Project": "Bắt đầu dự án",
        "Explore Our Services": "Khám phá dịch vụ",
        "One product team.": "Một đội ngũ sản phẩm.",
        "From first idea to production.": "Từ ý tưởng đầu tiên đến vận hành thực tế.",
        "Connected IoT, built end to end": "IoT kết nối, phát triển toàn diện",
        "From Sensor Data to": "Từ dữ liệu cảm biến đến",
        "Actionable Insight": "thông tin có giá trị",
        "We design ESP32 devices, reliable APIs and real-time dashboards as one connected system — ready for monitoring, control and scale.": "Chúng tôi thiết kế thiết bị ESP32, API ổn định và dashboard thời gian thực thành một hệ thống kết nối thống nhất — sẵn sàng để giám sát, điều khiển và mở rộng.",
        "Explore IoT Solutions": "Khám phá giải pháp IoT",
        "Start an IoT Project": "Bắt đầu dự án IoT",
        "Device to dashboard.": "Từ thiết bị đến dashboard.",
        "One team for every connected layer.": "Một đội ngũ cho mọi lớp kết nối.",
        "Environment overview": "Tổng quan môi trường",
        "Normal": "Bình thường",
        "Cloud sync": "Đồng bộ cloud",
        "Every 5 sec": "Mỗi 5 giây",
        "Encrypted stream": "Luồng dữ liệu mã hóa",
        "Practical AI for growing teams": "AI thực tiễn cho đội ngũ phát triển",
        "Turn Business Knowledge Into": "Biến tri thức doanh nghiệp thành",
        "Smarter Workflows": "quy trình thông minh hơn",
        "Bring secure AI assistants, document intelligence and automation into the software your team already uses.": "Đưa trợ lý AI bảo mật, trí tuệ tài liệu và tự động hóa vào chính phần mềm đội ngũ của bạn đang sử dụng.",
        "Explore AI Integration": "Khám phá tích hợp AI",
        "Discuss Your Use Case": "Trao đổi bài toán của bạn",
        "Useful, secure and grounded.": "Hữu ích, bảo mật và có căn cứ.",
        "AI designed around real company data.": "AI được thiết kế quanh dữ liệu doanh nghiệp thực tế.",
        "Private workspace": "Không gian riêng tư",
        "How do we onboard a new client?": "Quy trình tiếp nhận khách hàng mới như thế nào?",
        "Here is the verified onboarding process from your company knowledge base.": "Đây là quy trình tiếp nhận đã được xác thực từ kho tri thức doanh nghiệp.",
        "✓ 3 company sources": "✓ 3 nguồn nội bộ",
        "Ask your knowledge base...": "Hỏi kho tri thức của bạn...",
        "Operations Manual": "Cẩm nang vận hành",
        "128 pages • Indexed": "128 trang • Đã lập chỉ mục",
        "Company Policies": "Chính sách công ty",
        "Updated today": "Cập nhật hôm nay",
        "AI automation": "Tự động hóa AI",
        "24 workflows active": "24 quy trình đang hoạt động",
        "Live operations": "Vận hành trực tiếp",
        "Online": "Trực tuyến",
        "Active devices": "Thiết bị hoạt động",
        "Uptime": "Thời gian hoạt động",
        "Stable": "Ổn định",
        "Device": "Thiết bị",
        "Temperature": "Nhiệt độ",
        "Optimal": "Tối ưu",
        "Auto": "Tự động",
        "Fan": "Quạt",
        "Edge device": "Thiết bị biên",
        "Sensor Node 01": "Nút cảm biến 01",
        "Connected": "Đã kết nối",
        "Cloud API": "API đám mây",
        "Healthy": "Ổn định",
        "MQTT stream": "Luồng MQTT",
        "Encrypted": "Đã mã hóa",
        "BUILT FOR REAL-WORLD OPERATIONS": "XÂY DỰNG CHO VẬN HÀNH THỰC TẾ",
        "Business platforms": "Nền tảng doanh nghiệp",
        "Connected devices": "Thiết bị kết nối",
        "Intelligent systems": "Hệ thống thông minh",
        "About Suni Factory": "Về Suni Factory",
        "Technology Built for": "Công nghệ được xây dựng cho",
        "Real Business": "Doanh nghiệp thực tế",
        "Suni Factory is a software development company focused on building practical technology products for businesses. We combine software, web, mobile, IoT, cloud, API and AI expertise to turn promising ideas into dependable products that operate in the real world.": "Suni Factory là công ty phát triển phần mềm tập trung xây dựng các sản phẩm công nghệ thiết thực cho doanh nghiệp. Chúng tôi kết hợp chuyên môn về phần mềm, web, mobile, IoT, cloud, API và AI để biến những ý tưởng tiềm năng thành sản phẩm đáng tin cậy có thể vận hành trong thực tế.",
        "Explore our capabilities": "Khám phá năng lực của chúng tôi",
        "Years": "Năm",
        "Software development experience": "Kinh nghiệm phát triển phần mềm",
        "Web • Mobile • IoT": "Web • Mobile • IoT",
        "Full product development": "Phát triển sản phẩm toàn diện",
        "Connected Hardware": "Phần cứng kết nối",
        "IoT hardware integration": "Tích hợp phần cứng IoT",
        "End-to-End": "Từ đầu đến cuối",
        "From product idea to deployment": "Từ ý tưởng sản phẩm đến triển khai",
        "What we do": "Chúng tôi làm gì",
        "Our": "Các",
        "A multidisciplinary product team to design, build and connect every layer of your digital product.": "Đội ngũ sản phẩm đa chuyên môn để thiết kế, phát triển và kết nối mọi lớp trong sản phẩm số của bạn.",
        "Website Development": "Phát triển Website",
        "Custom websites, corporate websites, ecommerce platforms, dashboards and internal business systems.": "Website tùy chỉnh, website doanh nghiệp, nền tảng thương mại điện tử, dashboard và hệ thống nội bộ.",
        "Mobile App Development": "Phát triển Ứng dụng Mobile",
        "Mobile applications for businesses, startups and connected IoT products across platforms.": "Ứng dụng di động đa nền tảng dành cho doanh nghiệp, startup và các sản phẩm IoT kết nối.",
        "Core expertise": "Năng lực cốt lõi",
        "IoT Development": "Phát triển IoT",
        "Design and develop connected IoT devices using ESP32 and embedded systems — from sensor to cloud.": "Thiết kế và phát triển thiết bị IoT kết nối bằng ESP32 và hệ thống nhúng — từ cảm biến đến cloud.",
        "Sensors": "Cảm biến",
        "Temperature / Humidity": "Nhiệt độ / Độ ẩm",
        "OTA Firmware": "Firmware OTA",
        "Cloud Dashboard": "Dashboard Cloud",
        "Device Management": "Quản lý thiết bị",
        "Custom Software": "Phần mềm tùy chỉnh",
        "Build custom software systems shaped around your workflows and unique business requirements.": "Xây dựng hệ thống phần mềm tùy chỉnh theo quy trình vận hành và yêu cầu riêng của doanh nghiệp.",
        "Business Central & Custom Software": "Business Central & Phần mềm tùy chỉnh",
        "Implement, customize and integrate Microsoft Dynamics 365 Business Central with the workflows, data and systems your business already uses.": "Triển khai, tùy chỉnh và tích hợp Microsoft Dynamics 365 Business Central với quy trình, dữ liệu và các hệ thống doanh nghiệp đang sử dụng.",
        "ERP Integration": "Tích hợp ERP",
        "Management Systems": "Hệ thống quản lý",
        "Automation": "Tự động hóa",
        "API Services": "Dịch vụ API",
        "Databases": "Cơ sở dữ liệu",
        "Cloud & Backend": "Cloud & Backend",
        "Secure APIs, robust data layers and production infrastructure built for reliability and scale.": "API bảo mật, lớp dữ liệu vững chắc và hạ tầng production được xây dựng để vận hành ổn định và mở rộng.",
        "AI Integration": "Tích hợp AI",
        "Integrate modern AI technology into software products to make information and operations smarter.": "Tích hợp công nghệ AI hiện đại vào sản phẩm phần mềm để thông tin và hoạt động vận hành trở nên thông minh hơn.",
        "AI Chatbot": "Chatbot AI",
        "Document AI": "AI tài liệu",
        "RAG System": "Hệ thống RAG",
        "Local AI": "AI cục bộ",
        "LLM Integration": "Tích hợp LLM",
        "AI Automation": "Tự động hóa AI",
        "Our toolkit": "Bộ công nghệ",
        "Technologies We": "Những công nghệ chúng tôi",
        "Work With": "sử dụng",
        "Proven technologies selected for product fit, maintainability and long-term performance.": "Các công nghệ đã được kiểm chứng, lựa chọn dựa trên độ phù hợp, khả năng bảo trì và hiệu năng dài hạn.",
        "Frontend": "Giao diện",
        "Backend": "Hệ thống Backend",
        "Mobile": "Di động",
        "Database": "Cơ sở dữ liệu",
        "Embedded Systems": "Hệ thống nhúng",
        "Infrastructure": "Hạ tầng",
        "Artificial Intelligence": "Trí tuệ nhân tạo",
        "Business Platforms": "Nền tảng doanh nghiệp",
        "Embedding": "Nhúng dữ liệu",
        "Vector Database": "Cơ sở dữ liệu vector",
        "What we can create": "Những gì chúng tôi có thể tạo ra",
        "Solutions We Can": "Giải pháp chúng tôi có thể",
        "Build": "xây dựng",
        "From an operational challenge to a connected, measurable and user-friendly solution.": "Từ bài toán vận hành đến một giải pháp kết nối, đo lường được và thân thiện với người dùng.",
        "IoT Monitoring Platform": "Nền tảng Giám sát IoT",
        "Temperature, humidity and environmental monitoring using ESP32 devices connected to cloud dashboards.": "Giám sát nhiệt độ, độ ẩm và môi trường bằng thiết bị ESP32 kết nối với dashboard cloud.",
        "Discuss solution": "Trao đổi giải pháp",
        "Business Management Software": "Phần mềm Quản lý Doanh nghiệp",
        "Internal management systems that simplify operations, connect teams and automate repetitive work.": "Hệ thống quản lý nội bộ giúp đơn giản hóa vận hành, kết nối đội ngũ và tự động hóa công việc lặp lại.",
        "ERP solutions for finance, sales, purchasing, inventory, warehouse operations and management reporting—configured around your business processes.": "Giải pháp ERP cho tài chính, bán hàng, mua hàng, tồn kho, vận hành kho và báo cáo quản trị—được cấu hình theo quy trình của doanh nghiệp.",
        "E-commerce Platform": "Nền tảng Thương mại Điện tử",
        "Online selling systems connected with inventory, payments and practical business workflows.": "Hệ thống bán hàng trực tuyến kết nối kho, thanh toán và quy trình kinh doanh thực tế.",
        "Mobile IoT App": "Ứng dụng Mobile IoT",
        "Mobile applications that give users a simple way to control and monitor connected smart devices.": "Ứng dụng di động giúp người dùng điều khiển và giám sát thiết bị thông minh được kết nối một cách đơn giản.",
        "AI Knowledge System": "Hệ thống Tri thức AI",
        "Secure AI systems capable of answering questions from company documents using RAG technology.": "Hệ thống AI bảo mật có khả năng trả lời câu hỏi từ tài liệu doanh nghiệp bằng công nghệ RAG.",
        "Custom Dashboard": "Dashboard Tùy chỉnh",
        "Real-time dashboards that turn business, device and operational data into clear decisions.": "Dashboard thời gian thực biến dữ liệu kinh doanh, thiết bị và vận hành thành những quyết định rõ ràng.",
        "A practical product partner": "Đối tác sản phẩm thực tiễn",
        "Why Work With": "Vì sao nên hợp tác với",
        "Great products need more than code. They need thoughtful decisions across technology, user experience and day-to-day business operations.": "Sản phẩm tốt cần nhiều hơn việc viết code. Sản phẩm cần những quyết định thấu đáo về công nghệ, trải nghiệm người dùng và hoạt động kinh doanh hằng ngày.",
        "Talk to Our Team": "Trao đổi với đội ngũ",
        "Full-stack capability": "Năng lực Full-stack",
        "Frontend, backend, database and cloud expertise working as one product team.": "Chuyên môn frontend, backend, cơ sở dữ liệu và cloud trong một đội ngũ sản phẩm thống nhất.",
        "Software + Hardware": "Phần mềm + Phần cứng",
        "We connect digital experiences with ESP32 devices and real-world IoT systems.": "Chúng tôi kết nối trải nghiệm số với thiết bị ESP32 và hệ thống IoT trong thực tế.",
        "Startup Friendly": "Đồng hành cùng Startup",
        "Focused MVP development that helps founders learn, validate and move quickly.": "Phát triển MVP tập trung, giúp founder học hỏi, kiểm chứng và tiến nhanh hơn.",
        "Scalable Architecture": "Kiến trúc có khả năng mở rộng",
        "Systems planned to grow safely with your users, data and operations.": "Hệ thống được hoạch định để mở rộng an toàn cùng người dùng, dữ liệu và hoạt động vận hành.",
        "Long-term Partnership": "Đồng hành dài hạn",
        "Support beyond launch, with continuous operation, maintenance and upgrades.": "Hỗ trợ sau khi ra mắt, đồng hành trong vận hành, bảo trì và nâng cấp liên tục.",
        "Business-oriented Development": "Phát triển hướng đến kinh doanh",
        "Technology decisions guided by the business problem, not code for its own sake.": "Quyết định công nghệ được dẫn dắt bởi bài toán kinh doanh, không chỉ đơn thuần là viết code.",
        "Our process": "Quy trình của chúng tôi",
        "How We Build": "Cách chúng tôi xây dựng",
        "Products": "sản phẩm",
        "A clear six-stage process keeps your team informed, your investment focused and your product moving forward.": "Quy trình sáu giai đoạn rõ ràng giúp đội ngũ luôn nắm bắt tiến độ, tập trung nguồn lực và đưa sản phẩm tiến về phía trước.",
        "Discovery": "Khám phá",
        "Understand requirements, users and business goals.": "Tìm hiểu yêu cầu, người dùng và mục tiêu kinh doanh.",
        "Planning": "Lập kế hoạch",
        "Design the architecture and development roadmap.": "Thiết kế kiến trúc và lộ trình phát triển.",
        "UI / UX": "UI / UX",
        "Shape a clear interface and intuitive user experience.": "Thiết kế giao diện rõ ràng và trải nghiệm người dùng trực quan.",
        "Development": "Phát triển",
        "Build frontend, backend, mobile and IoT components.": "Phát triển các thành phần frontend, backend, mobile và IoT.",
        "Testing": "Kiểm thử",
        "Validate quality, reliability and critical workflows.": "Kiểm tra chất lượng, độ tin cậy và các luồng nghiệp vụ quan trọng.",
        "Deployment & Support": "Triển khai & Hỗ trợ",
        "Launch to production and support ongoing operations.": "Triển khai production và hỗ trợ vận hành liên tục.",
        "Selected concepts": "Dự án tiêu biểu",
        "Products &": "Sản phẩm &",
        "Representative solutions showing how we connect devices, data, software and people.": "Các giải pháp tiêu biểu thể hiện cách chúng tôi kết nối thiết bị, dữ liệu, phần mềm và con người.",
        "Live environment": "Môi trường trực tiếp",
        "Humidity": "Độ ẩm",
        "Devices": "Thiết bị",
        "IoT Platform": "Nền tảng IoT",
        "IoT Environment Monitoring System": "Hệ thống Giám sát Môi trường IoT",
        "View Project": "Xem dự án",
        "An IoT device system monitoring temperature and humidity through a real-time cloud dashboard.": "Hệ thống thiết bị IoT giám sát nhiệt độ và độ ẩm thông qua dashboard cloud thời gian thực.",
        "Knowledge assistant": "Trợ lý tri thức",
        "How does our onboarding process work?": "Quy trình tiếp nhận nhân sự của công ty diễn ra như thế nào?",
        "3 verified sources": "3 nguồn đã xác thực",
        "AI System": "Hệ thống AI",
        "AI Knowledge Assistant": "Trợ lý Tri thức AI",
        "A secure assistant that turns internal company documents into fast, cited answers for teams.": "Trợ lý bảo mật biến tài liệu nội bộ thành câu trả lời nhanh, có trích dẫn cho đội ngũ.",
        "Business overview": "Tổng quan kinh doanh",
        "Business Software": "Phần mềm doanh nghiệp",
        "Business Management Platform": "Nền tảng Quản lý Doanh nghiệp",
        "Dynamics 365 Business Central Integration": "Tích hợp Dynamics 365 Business Central",
        "A unified platform for managing internal workflows, business data and day-to-day operations.": "Nền tảng hợp nhất để quản lý quy trình nội bộ, dữ liệu kinh doanh và hoạt động hằng ngày.",
        "A connected ERP implementation integrating finance, sales, purchasing, inventory and Power BI reporting with existing business systems.": "Giải pháp ERP kết nối tài chính, bán hàng, mua hàng, tồn kho và báo cáo Power BI với các hệ thống hiện có của doanh nghiệp.",
        "Living room": "Phòng khách",
        "Air Quality": "Chất lượng không khí",
        "Good": "Tốt",
        "Device on": "Thiết bị đang bật",
        "Mobile + IoT": "Mobile + IoT",
        "Mobile Connected Device App": "Ứng dụng Mobile Điều khiển Thiết bị",
        "A mobile experience for controlling smart devices, viewing status and receiving live alerts.": "Trải nghiệm mobile để điều khiển thiết bị thông minh, xem trạng thái và nhận cảnh báo trực tiếp.",
        "Have a Startup Idea?": "Bạn có một ý tưởng Startup?",
        "Turn Your Idea Into a": "Biến ý tưởng của bạn thành",
        "Working Product": "Sản phẩm hoạt động thực tế",
        "We help founders transform ideas into focused MVPs combining software, mobile, cloud and IoT technologies.": "Chúng tôi giúp founder biến ý tưởng thành MVP tập trung, kết hợp công nghệ phần mềm, mobile, cloud và IoT.",
        "Build Your MVP": "Xây dựng MVP của bạn",
        "Start a conversation": "Bắt đầu cuộc trò chuyện",
        "Let's Build Something": "Cùng nhau xây dựng",
        "Together": "một sản phẩm tuyệt vời",
        "Tell us what you want to build, improve or connect. We’ll help you clarify the right first step.": "Hãy chia sẻ điều bạn muốn xây dựng, cải tiến hoặc kết nối. Chúng tôi sẽ giúp bạn xác định bước đi đầu tiên phù hợp.",
        "Email us": "Gửi email",
        "Based in": "Văn phòng tại",
        "Ho Chi Minh City, Vietnam": "Thành phố Hồ Chí Minh, Việt Nam",
        "Ready when you are.": "Sẵn sàng khi bạn sẵn sàng.",
        "Share as much or as little as you know.": "Hãy chia sẻ những gì bạn đã biết về dự án.",
        "Name": "Họ và tên",
        "Please enter your name.": "Vui lòng nhập họ và tên.",
        "Email": "Email",
        "Please enter a valid email.": "Vui lòng nhập email hợp lệ.",
        "Company": "Công ty",
        "Phone": "Số điện thoại",
        "Project Type": "Loại dự án",
        "Select a service": "Chọn một dịch vụ",
        "Website": "Website",
        "Mobile App": "Ứng dụng Mobile",
        "IoT Project": "Dự án IoT",
        "Other": "Khác",
        "Please select a project type.": "Vui lòng chọn loại dự án.",
        "Budget": "Ngân sách",
        "Choose a range": "Chọn khoảng ngân sách",
        "Under $5,000": "Dưới $5.000",
        "$5,000 – $15,000": "$5.000 – $15.000",
        "$15,000 – $30,000": "$15.000 – $30.000",
        "$30,000+": "Trên $30.000",
        "Let's discuss": "Cùng trao đổi",
        "Project Description": "Mô tả dự án",
        "Please tell us a little about your project.": "Vui lòng chia sẻ đôi nét về dự án.",
        "Send Project Request": "Gửi yêu cầu dự án",
        "Frontend demo — your information is not sent or stored yet.": "Bản demo frontend — thông tin của bạn hiện chưa được gửi hoặc lưu trữ.",
        "Your request is ready.": "Yêu cầu của bạn đã sẵn sàng.",
        "This demo form is working on the frontend. Connect it to your preferred backend when the site goes live.": "Form demo đang hoạt động ở frontend. Hãy kết nối với backend phù hợp khi website chính thức vận hành.",
        "Building Software. Connecting Devices. Creating Digital Products.": "Xây dựng phần mềm. Kết nối thiết bị. Kiến tạo sản phẩm số.",
        "Software": "Phần mềm",
        "Mobile Development": "Phát triển Mobile",
        "Location": "Địa điểm",
        "Back to top": "Về đầu trang",
        "© 2026 Suni Factory. All rights reserved.": "© 2026 Suni Factory. Đã đăng ký bản quyền.",
        "Suni Factory home": "Trang chủ Suni Factory",
        "Open navigation menu": "Mở menu điều hướng",
        "Close navigation menu": "Đóng menu điều hướng",
        "Primary navigation": "Điều hướng chính",
        "Language selector": "Chọn ngôn ngữ",
        "Switch to English": "Chuyển sang tiếng Anh",
        "Switch to Vietnamese": "Chuyển sang tiếng Việt",
        "Suni Factory values": "Giá trị của Suni Factory",
        "Connected product ecosystem illustration": "Minh họa hệ sinh thái sản phẩm kết nối",
        "Core delivery capabilities": "Năng lực triển khai cốt lõi",
        "Website development technologies": "Công nghệ phát triển website",
        "Mobile development technologies": "Công nghệ phát triển mobile",
        "IoT development capabilities": "Năng lực phát triển IoT",
        "Custom software examples": "Ví dụ phần mềm tùy chỉnh",
        "Cloud and backend technologies": "Công nghệ cloud và backend",
        "AI integration capabilities": "Năng lực tích hợp AI",
        "Discuss an IoT monitoring platform": "Trao đổi về nền tảng giám sát IoT",
        "Discuss business management software": "Trao đổi về phần mềm quản lý doanh nghiệp",
        "Discuss Dynamics 365 Business Central solutions": "Trao đổi về giải pháp Dynamics 365 Business Central",
        "Discuss an ecommerce platform": "Trao đổi về nền tảng thương mại điện tử",
        "Discuss a mobile IoT app": "Trao đổi về ứng dụng mobile IoT",
        "Discuss an AI knowledge system": "Trao đổi về hệ thống tri thức AI",
        "Discuss a custom dashboard": "Trao đổi về dashboard tùy chỉnh",
        "View IoT Environment Monitoring System project": "Xem dự án Hệ thống Giám sát Môi trường IoT",
        "View AI Knowledge Assistant project": "Xem dự án Trợ lý Tri thức AI",
        "View Business Management Platform project": "Xem dự án Nền tảng Quản lý Doanh nghiệp",
        "View Dynamics 365 Business Central Integration project": "Xem dự án Tích hợp Dynamics 365 Business Central",
        "View Mobile Connected Device App project": "Xem dự án Ứng dụng Mobile Điều khiển Thiết bị",
        "Your full name": "Họ và tên của bạn",
        "Company name": "Tên công ty",
        "Business Central Solutions": "Giải pháp Business Central",
        "Tell us about the product, challenge or idea...": "Hãy chia sẻ về sản phẩm, bài toán hoặc ý tưởng...",
        "Homepage banner carousel": "Trình chiếu banner trang chủ",
        "Slide 1 of 3": "Trang 1 trên 3",
        "Slide 2 of 3": "Trang 2 trên 3",
        "Slide 3 of 3": "Trang 3 trên 3",
        "IoT delivery value": "Giá trị triển khai IoT",
        "IoT monitoring system illustration": "Minh họa hệ thống giám sát IoT",
        "AI delivery value": "Giá trị triển khai AI",
        "AI knowledge assistant illustration": "Minh họa trợ lý tri thức AI",
        "Banner navigation": "Điều hướng banner",
        "Previous banner": "Banner trước",
        "Next banner": "Banner tiếp theo",
        "Go to slide 1": "Chuyển đến trang 1",
        "Go to slide 2": "Chuyển đến trang 2",
        "Go to slide 3": "Chuyển đến trang 3",
        "Connected software, mobile, cloud and IoT product ecosystem": "Hệ sinh thái sản phẩm kết nối phần mềm, mobile, cloud và IoT",
        "ESP32 devices and environmental sensors connected to a smart factory cloud platform": "Thiết bị ESP32 và cảm biến môi trường kết nối với nền tảng nhà máy thông minh trên cloud",
        "AI knowledge assistant connected to secure company documents and workflows": "Trợ lý tri thức AI kết nối với tài liệu và quy trình bảo mật của doanh nghiệp",
        "Modern responsive website, ecommerce and analytics platform": "Nền tảng website responsive hiện đại, thương mại điện tử và phân tích dữ liệu",
        "Business mobile applications with analytics and connected device controls": "Ứng dụng mobile doanh nghiệp với phân tích dữ liệu và điều khiển thiết bị kết nối",
        "Connected microcontroller, environmental sensors and cloud monitoring dashboard": "Vi điều khiển kết nối cảm biến môi trường và dashboard giám sát cloud",
        "Connected business management, inventory and workflow automation system": "Hệ thống quản lý doanh nghiệp, kho hàng và tự động hóa quy trình được kết nối",
        "Secure cloud infrastructure with servers, containers, APIs and databases": "Hạ tầng cloud bảo mật với máy chủ, container, API và cơ sở dữ liệu",
        "AI knowledge assistant connected to documents, search and automation workflows": "Trợ lý tri thức AI kết nối tài liệu, tìm kiếm và quy trình tự động hóa"
      }
    }
  };

  const defaultMeta = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || "",
    keywords: document.querySelector('meta[name="keywords"]')?.content || "",
    ogTitle: document.querySelector('meta[property="og:title"]')?.content || "",
    ogDescription: document.querySelector('meta[property="og:description"]')?.content || "",
    locale: document.querySelector('meta[property="og:locale"]')?.content || "en_US"
  };

  // Capture original English nodes once so switching never degrades the source copy.
  const originalText = new WeakMap();
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentTag = node.parentElement?.tagName;
      if (!node.nodeValue.trim() || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parentTag)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    textNodes.push(node);
    originalText.set(node, node.nodeValue);
  }

  const translatedAttributes = [];
  document.querySelectorAll("[aria-label], [placeholder], [title], [alt]").forEach((element) => {
    ["aria-label", "placeholder", "title", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      translatedAttributes.push({ element, attribute, original: element.getAttribute(attribute) });
    });
  });

  const metaElements = {
    description: document.querySelector('meta[name="description"]'),
    keywords: document.querySelector('meta[name="keywords"]'),
    ogTitle: document.querySelector('meta[property="og:title"]'),
    ogDescription: document.querySelector('meta[property="og:description"]'),
    locale: document.querySelector('meta[property="og:locale"]')
  };

  let currentLanguage = "en";

  const getText = (key, language = currentLanguage) => {
    if (language === "en") return key;
    return translations[language]?.text[key] || key;
  };

  const syncMenuLabel = () => {
    const menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute(
      "aria-label",
      getText(menuIsOpen ? "Close navigation menu" : "Open navigation menu")
    );
  };

  const setLanguage = (language, { persist = false, announce = false } = {}) => {
    currentLanguage = translations[language] ? language : "en";
    const dictionary = translations[currentLanguage]?.text || {};

    textNodes.forEach((node) => {
      const source = originalText.get(node);
      const key = source.trim();
      const translated = dictionary[key] || key;
      const leadingSpace = source.match(/^\s*/)?.[0] || "";
      const trailingSpace = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leadingSpace}${translated}${trailingSpace}`;
    });

    translatedAttributes.forEach(({ element, attribute, original }) => {
      element.setAttribute(attribute, dictionary[original] || original);
    });

    const meta = currentLanguage === "en" ? defaultMeta : translations[currentLanguage].meta;
    document.title = meta.title;
    metaElements.description?.setAttribute("content", meta.description);
    metaElements.keywords?.setAttribute("content", meta.keywords);
    metaElements.ogTitle?.setAttribute("content", meta.ogTitle);
    metaElements.ogDescription?.setAttribute("content", meta.ogDescription);
    metaElements.locale?.setAttribute("content", meta.locale);
    document.documentElement.lang = currentLanguage;

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    syncMenuLabel();

    if (persist) {
      try {
        localStorage.setItem("suni-factory-language", currentLanguage);
      } catch (error) {
        // File previews or privacy settings may block storage; switching still works.
      }
    }

    if (announce && languageStatus) {
      languageStatus.textContent = currentLanguage === "vi"
        ? "Ngôn ngữ đã chuyển sang tiếng Việt."
        : "Language changed to English.";
    }

    document.dispatchEvent(new CustomEvent("languagechange", {
      detail: { language: currentLanguage }
    }));
  };

  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem("suni-factory-language");
  } catch (error) {
    // Continue with browser language detection when storage is unavailable.
  }

  const browserLanguage = navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
  const initialLanguage = ["en", "vi"].includes(savedLanguage) ? savedLanguage : browserLanguage;

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language, { persist: true, announce: true });
    });
  });

  setLanguage(initialLanguage);

  // Accessible hero banner carousel with buttons, keyboard and touch support.
  const heroSlider = document.querySelector("[data-hero-slider]");
  const heroTrack = heroSlider?.querySelector(".hero-track");
  const heroViewport = heroSlider?.querySelector(".hero-viewport");
  const heroSlides = heroSlider ? [...heroSlider.querySelectorAll(".hero-slide")] : [];
  const previousSlideButton = heroSlider?.querySelector("[data-slide-prev]");
  const nextSlideButton = heroSlider?.querySelector("[data-slide-next]");
  const slideDots = heroSlider ? [...heroSlider.querySelectorAll("[data-slide-to]")] : [];
  const heroSliderStatus = document.querySelector("#hero-slider-status");
  let currentSlide = 0;
  let touchStartX = null;

  const getSlideLabel = (index) => currentLanguage === "vi"
    ? `Trang ${index + 1} trên ${heroSlides.length}`
    : `Slide ${index + 1} of ${heroSlides.length}`;

  const updateHeroSlider = (nextIndex, announce = true) => {
    if (!heroSlides.length) return;

    currentSlide = (nextIndex + heroSlides.length) % heroSlides.length;
    heroTrack.style.transform = `translate3d(-${currentSlide * 100}%, 0, 0)`;
    heroSlider.dataset.currentSlide = String(currentSlide);

    heroSlides.forEach((slide, index) => {
      const isActive = index === currentSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.setAttribute("aria-label", getSlideLabel(index));
      slide.inert = !isActive;
    });

    slideDots.forEach((dot, index) => {
      const isActive = index === currentSlide;
      dot.classList.toggle("active", isActive);
      if (isActive) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });

    if (announce && heroSliderStatus) {
      heroSliderStatus.textContent = getSlideLabel(currentSlide);
    }
  };

  previousSlideButton?.addEventListener("click", () => updateHeroSlider(currentSlide - 1));
  nextSlideButton?.addEventListener("click", () => updateHeroSlider(currentSlide + 1));

  slideDots.forEach((dot) => {
    dot.addEventListener("click", () => updateHeroSlider(Number(dot.dataset.slideTo)));
  });

  heroViewport?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      updateHeroSlider(currentSlide - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      updateHeroSlider(currentSlide + 1);
    }
  });

  heroViewport?.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  heroViewport?.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) > 48) {
      updateHeroSlider(currentSlide + (distance < 0 ? 1 : -1));
    }

    touchStartX = null;
  }, { passive: true });

  document.addEventListener("languagechange", () => updateHeroSlider(currentSlide, false));
  updateHeroSlider(0, false);

  // Sticky header visual state.
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Accessible mobile navigation.
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    header.classList.remove("menu-active");
    document.body.classList.remove("menu-open");
    syncMenuLabel();
  };

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    navigation.classList.add("open");
    header.classList.add("menu-active");
    document.body.classList.add("menu-open");
    syncMenuLabel();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) closeMenu();
  });

  // Highlight the section currently in view.
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            const matches = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("active", matches);
            if (matches) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -58%", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Subtle entrance animation with a small stagger for card groups.
  const revealItems = [...document.querySelectorAll(".reveal")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const siblings = [...entry.target.parentElement.children].filter((item) =>
            item.classList.contains("reveal")
          );
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Frontend-only validation and success feedback for the contact form.
  const form = document.querySelector("#project-form");
  const successMessage = document.querySelector("#form-success");
  const requiredFields = [...form.querySelectorAll("[required]")];

  const validateField = (field) => {
    const wrapper = field.closest(".form-field");
    const valid = field.checkValidity();
    wrapper.classList.toggle("invalid", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    return valid;
  };

  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.closest(".form-field").classList.contains("invalid")) validateField(field);
    });
    field.addEventListener("change", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    const isValid = requiredFields.map(validateField).every(Boolean);

    if (!isValid) {
      const firstInvalid = requiredFields.find((field) => !field.checkValidity());
      firstInvalid?.focus();
      return;
    }

    successMessage.hidden = false;
    successMessage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });
});
