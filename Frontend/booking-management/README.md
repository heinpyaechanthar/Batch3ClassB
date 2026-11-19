# Booking Management

React ဖြင့်ရေးထားသော Level Placement Test booking frontend demo ဖြစ်ပါတယ်။ ပုံစံကို ပေးထားတဲ့ mockup တွေနဲ့လိုက်ဖက်အောင်ပြုလုပ်ထားပြီး ပေးထားတဲ့ mascot ပုံ၊ icon နဲ့ အရောင်တွေကို အသုံးပြုထားပါတယ်။ အရောင်သတ်မှတ်ချက်တွေကို `src/styles.css` ထဲမှာ ကြည့်နိုင်ပါတယ်။

## Run

```bash
pnpm install
pnpm run dev
```

Terminal မှာပြတဲ့ Vite လိပ်စာကို browser မှာဖွင့်ပါ။ Production build စစ်ဆေးဖို့ `pnpm run build` ကိုသုံးနိုင်ပါတယ်။

## ဖိုင်ဖွဲ့စည်းပုံ

- `src/App.js` — Booking List / Create / Update screen တွေကို ပြောင်းလဲပြသပြီး booking data ကို `useState` နဲ့ထိန်းပါတယ်။ Browser ရဲ့ `localStorage` ထဲမှာသိမ်းတာကြောင့် refresh လုပ်ပြီးနောက်လည်း data မပျောက်ပါဘူး။
- `src/component/BookingList.js` — Booking List card, status, date/time နဲ့ edit/view icon တွေကိုပြပါတယ်။
- `src/component/BookingForm.js` — Create နဲ့ Update form တစ်ခုတည်းကို ပြန်သုံးပါတယ်။ Update လုပ်တဲ့အခါ ရှိပြီးသားအချက်အလက်အားလုံးကို ဖြည့်ပေးပါတယ်။
- `src/component/BookingDetails.js` — View icon ကိုနှိပ်တဲ့အခါ booking အသေးစိတ်ကို ပြပါတယ်။
- `src/data/demoBookings.js` — ပထမဆုံးဖွင့်ချိန်မှာ မြင်ရမယ့် ဥပမာ booking ၄ ခု။
- `src/styles.css` — အရောင်၊ card ပုံစံနဲ့ ဖုန်းမျက်နှာပြင်အတွက် layout ကို သတ်မှတ်ထားပါတယ်။
- `design/color.txt` — ZIP ထဲက မူရင်း color palette.
- `public/assets/` — ပေးထားတဲ့ ZIP ထဲက ပုံနဲ့ icon ဖိုင်တွေ။

Create form မှာ အချက်အလက်များကိုဖြည့်ပြီး Payment Slip ပုံကို upload လုပ်ကာ `Book Test` နှိပ်ရင် Booking List ကိုပြန်သွားပါတယ်။ Edit လုပ်ပြီး `Update Booking` နှိပ်ရင် အပြောင်းအလဲကို စာရင်းမှာမြင်ရပါတယ်။ စာရင်းမှာ အချိန်ကို `10:00 AM` လို တစ်ခုတည်းပဲပြပါတယ်။ React component တွေကို `.js` ဖိုင်တွေနဲ့ရေးထားပြီး အဲဒီဖိုင်တွေကို Vite က compile လုပ်နိုင်အောင် သတ်မှတ်ထားပါတယ်။
