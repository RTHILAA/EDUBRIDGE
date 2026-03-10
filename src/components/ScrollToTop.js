import React, { useState, useEffect, useCallback } from 'react'; // زدنا useCallback
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. تغليف دالة حساب التقدم بـ useCallback
  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;
    
    if (documentHeight > 0) {
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    }
  }, []);

  // 2. تغليف دالة إظهار الزر بـ useCallback وزيادة calculateScrollProgress كـ dependency
  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    calculateScrollProgress();
  }, [calculateScrollProgress]);

  // 3. تحديث useEffect بالتبعيات الصحيحة
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', calculateScrollProgress);
    
    // الحساب الأولي
    calculateScrollProgress();

    // التنظيف (Cleanup) ضروري للحفاظ على الأداء والبطارية
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [toggleVisibility, calculateScrollProgress]); // دبا التحذير غادي يختفي حيت زدناهم هنا

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="scroll-to-top with-progress" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          style={{
            background: `conic-gradient(var(--red) ${scrollProgress}%, var(--dark-blue) ${scrollProgress}% 100%)`
          }}
        >
          <div className="inner-circle">
            <ArrowUp size={24} />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;