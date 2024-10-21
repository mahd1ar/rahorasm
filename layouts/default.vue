<script setup lang="ts">

const sampleData = [
  {
    "id": "63",
    "name": "تور آسیا",
    "children": [
      {
        "id": 188,
        "name": "ترکیه",
        "children": [
          {
            "id": 145,
            "name": "استانبول",
            "path": "/asia-tour-استانبول"
          },
          {
            "id": 223,
            "name": "آنتالیا",
            "path": "asia-tour-آنتالیا"
          },
          {
            "id": 356,
            "name": "مارماریس",
            "path": "asia-tour-مارماریس"
          },
          {
            "id": 44,
            "name": "فتحیه",
            "path": "asia-tour-فتحیه"
          },
          {
            "id": 566,
            "name": "کوشی آداسی",
            "path": "asia-tour-کوشی-آداسی"
          },
          {
            "id": 916,
            "name": "بدروم",
            "path": "asia-tour-بدروم"
          }
        ]
      },
      {
        "id": 2874,
        "name": "امارات",
        "children": [
          {
            "id": 161,
            "name": "دبی",
            "path": "asia-rour-دبی"
          }
        ]
      },
      {
        "id": 3679,
        "name": "روسیه",
        "children": [
          {
            "id": 1779,
            "name": "سوچی",
            "path": "asia-rour-سوچی"
          },
          {
            "id": 2098,
            "name": "ی ترکیبی روسیه",
            "path": "asia-rour-ترکیبی-روسیه"
          }
        ]
      },
      {
        "id": 4056,
        "name": "گرجستان",
        "children": [
          {
            "id": 1567,
            "name": "تفلیس",
            "path": "asia-rour-تفلیس"
          },
          {
            "id": 7802,
            "name": "باتومی",
            "path": "asia-rour-باتومی"
          },
          {
            "id": 3246,
            "name": "ی ترکیبی",
            "path": "asia-rour-ترکیبی"
          }
        ]
      },
      {
        "id": 5234,
        "name": "تایلند",
        "children": [
          {
            "id": 8961,
            "name": "پوکت",
            "path": "asia-rour-پوکت"
          },
          {
            "id": 23456,
            "name": "پاتایا",
            "path": "asia-rour-پاتایا"
          },
          {
            "id": 36678,
            "name": "بانکوک",
            "path": "asia-rour-بانکوک"
          }
        ]
      },
      {
        "id": 6873,
        "name": "مالزی",
        "children": [
          {
            "id": 891,
            "name": "کوالالامپور",
            "path": "asia-rour-کوالالامپور"
          }
        ]
      },
      {
        "id": 7985,
        "name": "یونان",
        "path": "asia-rour-یونان"
      }
    ]
  },
  {
    "id": "409",
    "name": "تور اروپا",
    "children": [
      {
        "id": 141,
        "name": "تور اسپانیا"
      },
      {
        "id": 261,
        "name": "تور فرانسه"
      },
      {
        "id": 301,
        "name": "تور یونان"
      },
      {
        "id": 481,
        "name": "تور ایتالیا"
      },
      {
        "id": 551,
        "name": "تور سوئیس"
      },
      {
        "id": 641,
        "name": "تور هلند"
      },
      {
        "id": 781,
        "name": "تور اتریش"
      }
    ]
  },
  {
    "id": "78",
    "name": "ویزا",
    "children": [
      {
        "id": 11,
        "name": "امارات",
        "path": "/visa"
      },
      {
        "id": 21,
        "name": "ترکیه",
        "path": "/visa"
      },
      {
        "id": 31,
        "name": "روسیه",
        "path": "/visa"
      },
      {
        "id": 41,
        "name": "گرجستان",
        "path": "/visa"
      },
      {
        "id": 51,
        "name": "اسپانیا",
        "path": "/visa"
      },
      {
        "id": 61,
        "name": "فرانسه",
        "path": "/visa"
      },
      {
        "id": 71,
        "name": "یونان",
        "path": "/visa"
      }
    ]
  },
  {
    "id": "63cd",
    "name": "هتل ها",
    "children": [
      {
        "id": 1887,
        "name": "هتل های آسیایی",
        "children": [
          {
            "id": 22333,
            "name": "ترکیه",
            "path": "hotels"
          },
          {
            "id": 14533,
            "name": "امارات",
            "path": "hotels"
          },
          {
            "id": 35336,
            "name": "گرجستان",
            "path": "hotels"
          },
          {
            "id": 4334,
            "name": "چین",
            "path": "hotels"
          },
          {
            "id": 91336,
            "name": "مالزی",
            "path": "hotels"
          }
        ]
      },
      {
        "id": 2874888,
        "name": "هتل های اروپایی",
        "children": [
          {
            "id": 1677771,
            "name": "اسپانیا",
            "path": "asia-rour-اسپانیا"
          },
          {
            "id": 16887881,
            "name": "فرانسه",
            "path": "asia-rour-اسپانیا"
          },
          {
            "id": 168881,
            "name": "آلمان",
            "path": "asia-rour-آلمان"
          },
          {
            "id": 1619787,
            "name": "ایتالیا",
            "path": "asia-rour-ایتالیا"
          }
        ]
      },
      {
        "id": 3644479,
        "name": "هتل های داخلی",
        "children": [
          {
            "id": 17666679,
            "name": "مشهد",
            "path": "asia-rour-مشهد"
          },
          {
            "id": 20777798,
            "name": "کیش",
            "path": "asia-rour-کیش"
          }
        ]
      }
    ]
  },
  {
    "id": "200",
    "name": "گردشگری",
    "children": [
      {
        "id": 363,
        "name": "جاذبه های گردشگری",
        "children": [
          {
            "id": 67,
            "name": "جاذبه های ترکیه",
            "path": "/جاذبه-های-ترکیه",
            "children": [
              {
                "id": 761,
                "name": "جاذبه های استانبول",
                "path": "/جاذبه-های-استانبول"
              },
              {
                "id": 781,
                "name": "جاذبه های آنکارا",
                "path": "/جاذبه-های-آنکارا"
              },
              {
                "id": 741,
                "name": "جاذبه های آنتالیا",
                "path": "/جاذبه-های-آنتالیا"
              },
              {
                "id": 7121,
                "name": "جاذبه های کوشی آداسی",
                "path": "/جاذبه-های-کوشی-آداسی"
              },
              {
                "id": 7071,
                "name": "جاذبه های مارماریس",
                "path": "/جاذبه-های-مارماریس"
              }
            ]
          },
          {
            "id": 83,
            "name": "جاذبه های داخلی",
            "path": "/جاذبه-های-داخلی"
          },
          {
            "id": 921,
            "name": "جاذبه های هند",
            "path": "/جاذبه-های-هند"
          },
          {
            "id": 452,
            "name": "جاذبه های ارمنستان",
            "path": "/جاذبه-های-ارمنستان"
          },
          {
            "id": 532,
            "name": "جاذبه های اروپا",
            "path": "/جاذبه-های-اروپا"
          },
          {
            "id": 813,
            "name": "جاذبه های سنگاپور",
            "path": "/جاذبه-های-سنگاپور"
          },
          {
            "id": 901,
            "name": "جاذبه های صربستان",
            "path": "/جاذبه-های-صربستان"
          },
          {
            "id": 402,
            "name": "جاذبه های ویتنام",
            "path": "/جاذبه-های-ارمنستان"
          }
        ]
      },
      {
        "id": 373,
        "name": "مقالات",
        "children": [
          {
            "id": 617,
            "name": "ایرانگردی",
            "path": "/blogs"
          },
          {
            "id": 843,
            "name": "جهانگردی",
            "path": "/blogs"
          },
          {
            "id": 9821,
            "name": "راهنمای سفر",
            "path": "/راهنمای-سفر"
          },
          {
            "id": 4852,
            "name": "بهترین زمان سفر",
            "path": "/بهترین-زمان-سفر"
          },
          {
            "id": 5832,
            "name": "معروف ترین غذاها",
            "path": "/معروف-ترین-غذاها"
          },
          {
            "id": 8813,
            "name": "معروف ترین مراکز خرید",
            "path": "/معروفترین-مراکز-خرید"
          },
          {
            "id": 9801,
            "name": "معروف ترین رستوران ها",
            "path": "/معروف-ترین-رستوران-ها"
          },
          {
            "id": 4802,
            "name": "اخبار گردشگری",
            "path": "/اخبار-گردشگری"
          }
        ]
      }
    ]
  },
  {
    "id": "184",
    "name": "درباره ما",
    "path": "/about"
  },
  {
    "id": "780",
    "name": "تماس با ما",
    "path": "/contact"
  }
]



</script>

<template>
  <div dir="rtl" class="min-h-screen  grid" >
    <div class="h-full flex-col flex" >

      <NavbarSectionCop :items="sampleData" class="" />
      <div class=" w-full h-full " >
  
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
