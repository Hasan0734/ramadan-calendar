import Card from "../Card/Card";
const prays = [
    {
        id: 1,
        title: 'সাহরীর দোয়া',
        arabic: 'نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضَا لَكَ يَا اللهُ فَتَقَبَّل مِنِّى اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم',
        expression: "নাওয়াইতু আন আছুমা গাদাম মিন শাহরি রমাজানাল মুবারাকিফারদাল্লাকা, ইয়া আল্লাহু ফাতাকাব্বাল মিন্নি ইন্নিকা আংতাস সামিউল আলিম।",
        meaning: 'হে আল্লাহ! আগামীকাল পবিত্র রমযান মাসে তোমার পক্ষ হতে ফর রোজা রাখার নিয়ত করলাম, অতএব তুমি আমার পক্ষ হতে তা কবুল কর।'
        
    },
    {
        id: 2,
        title: 'ইফতারের দোয়া',
        arabic: 'بسم الله اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ اَفْطَرْتُ',
        expression: "আল্লাহুম্মা লাকা ছুমতু ওয়া আলা রিযক্বিকা ওয়া আফতারতু বিরাহমাতিকা ইয়া আরহামার রাহিমিন।",
        meaning: 'হে আল্লাহ! আমি তোমারই সন্তুষ্টির জন্য রোজা রেখেছি এবং তোমারই দেয়া রিযিজের মাধ্যমে ইফতার করেছি।'
        
    }
]
const Pray = () => {
    return (
        <>
            {prays.map((item, i) => <Card key={i} item={item}/>)}
        </>
        
    );
};

export default Pray;