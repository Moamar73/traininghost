export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">تنفيذ الدورات التدريبية في أوروبا</h1>
        <p className="text-lg max-w-2xl mx-auto">
          نقدم خدمات احترافية لتنفيذ دوراتكم التدريبية في لندن و7 مدن أوروبية، بالنيابة عن مراكز التدريب في الخليج والعالم العربي.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">الخدمات التي نقدمها</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'منسقة تتواصل باسم مركز التدريب',
            'رول أب يحمل شعار المركز',
            'مدربون محترفون $$$$$$$$$$$$$$$ بتقييم ممتاز',
            'مواقع تدريب في مواقع حيوية',
            'مكاتب مجهزة بالكامل',
            'توصيل من المطار للسكن',
            'كوفي بريك وضيافة',
            'إدارة الدورة باسم مركزكم'
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">المدن التي نخدمها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
          {[
            'لندن',
            'باريس',
            'أمستردام',
            'روما',
            'برلين',
            'مدريد',
            'فيينا',
            'زيورخ'
          ].map((city, i) => (
            <div key={i} className="bg-blue-50 rounded-lg p-4 font-semibold">{city}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center px-4">
        <h3 className="text-2xl font-bold mb-4">هل تمثل مركز تدريب؟</h3>
        <p className="mb-6">دعنا ننفذ دورتك القادمة في أوروبا باسم مركزك وبأفضل جودة.</p>
        <a href="#" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow hover:bg-gray-100 transition">تواصل معنا</a>
      </section>
    </div>
  );
}
