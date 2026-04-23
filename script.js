function openModal(type) {
  let content = "";

  if(type === "about") {
    content = `
      <h3>درباره ما</h3>
      <p>این سامانه با هدف مدیریت، پیشگیری و پایش زخم در ایران طراحی شده است.</p>
      <p>تیم تخصصی پرستاری و مدیریت زخم</p>
    `;
  }

  if(type === "contact") {
    content = `
      <h3>تماس با ما</h3>
      <p>📞 09210739833</p>
      <p>📞 09141973745</p>
      <a href="tel:09210739833">تماس</a> | 
      <a href="sms:09210739833">پیامک</a>
    `;
  }

  if(type === "uploadWound") {
    content = `
      <h3>بارگذاری عکس زخم</h3>
      <p>نور محیط مناسب باشد. لطفاً دوربین در زاویه 90 درجه با زخم و با فاصله  20الی30 سانتی‌متر از آن باشد. حتما یک خط‌کش کنار زخم باشد تا اندازه زخم قابل تخمین باشد.</p>
      <input type="file">
      <button>ارسال</button>
    `;
  }

  if(type === "homeCare") {
    content = `
      <h3>درخواست زخم در منزل</h3>
      <input placeholder="شماره تماس">
      <textarea placeholder="توضیحات"></textarea>
      <button>ثبت درخواست</button>
    `;
  }

  if(type === "therapist") {
    content = `
      <h3>ثبت درمانگر زخم</h3>
      <input placeholder="نام و نام خانوادگی">
      <input placeholder="شماره نظام پزشکی/پرستاری">
      <input type="file">
      <button>ثبت</button>
    `;
  }

  if(type === "clinic") {
    content = `
      <h3>ثبت کلینیک زخم</h3>
      <input placeholder="نام کلینیک">
      <input placeholder="شهرستان">
      <input placeholder="ساعت کاری">
      <button>ثبت</button>
    `;
  }

 if(type === "diabetic") {
  content = `
    <h3>غربالگری پای دیابتی</h3>

    <p style="background:#fff3cd;padding:10px;border-radius:8px;line-height:1.8;">
      <strong>توجه مهم:</strong><br>
      تمام بیماران دیابتی مستعد زخم پای دیابتی هستند. با انجام غربالگری و ارزیابی منظم پاهای خود، می‌توان خطر ایجاد زخم را تا حد بسیار زیادی کاهش داد.
      زیرا بسیاری از مشکلات پا پیش از تبدیل شدن به زخم قابل شناسایی و پیشگیری هستند. کافی است جهت انجام غربالگری پای خود تاریخ وساعت انجام آن را در پایین ثبت کنید  تا در زمان ذکر شده به صورت حضوری یا تماس ویدیویی پای شما مورد غربالگری قرار بگیرد.
    </p>

    <hr>

    <label>تاریخ انجام غربالگری</label>
    <input type="date">

    <label>ساعت انجام</label>
    <input type="time">

    <button>ثبت غربالگری</button>
  `;
  }

  if(type === "consult") {
    content = `
      <h3>مشاوره و آموزش</h3>
      <input placeholder="شماره تماس">
      <textarea placeholder="نوع درخواست"></textarea>
      <button>ارسال</button>
    `;
  }

  if(type === "equipment") {
    content = `
      <h3>ارسال تجهیزات و پانسمان</h3>
      <input placeholder="آدرس">
      <input placeholder="شماره تماس">
      <textarea placeholder="لیست تجهیزات"></textarea>
      <button>ثبت سفارش</button>
    `;
  }

  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}