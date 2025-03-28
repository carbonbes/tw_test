import { defineStore } from 'pinia'

export type Service = {
  id: number
  status: 'active' | 'inactive'
  date_created: string
  name: string
  price: number
}

export const useServicesStore = defineStore('services-store', () => {
  const services = ref<Service[]>([
    {
      id: 23,
      status: 'inactive',
      date_created: '2021-10-02',
      name: 'Покупка мебели',
      price: 3538,
    },
    {
      id: 6,
      status: 'active',
      date_created: '2021-10-12',
      name: 'Покупка квартиры',
      price: 2000,
    },
    {
      id: 9,
      status: 'active',
      date_created: '2021-10-12',
      name: 'Оплата обучения',
      price: 6420,
    },
    {
      id: 24,
      status: 'active',
      date_created: '2021-10-29',
      name: 'Покупка бытовой техники',
      price: 8140,
    },
    {
      id: 19,
      status: 'active',
      date_created: '2021-10-20',
      name: 'Покупка телефона',
      price: 790,
    },
    {
      id: 21,
      status: 'inactive',
      date_created: '2021-10-28',
      name: 'Ремонт квартиры',
      price: 7531,
    },
    {
      id: 14,
      status: 'active',
      date_created: '2021-10-05',
      name: 'Путешествие',
      price: 6652,
    },
    {
      id: 20,
      status: 'active',
      date_created: '2021-10-07',
      name: 'Покупка мебели',
      price: 1268,
    },
    {
      id: 11,
      status: 'inactive',
      date_created: '2021-10-11',
      name: 'Покупка книг',
      price: 3120,
    },
    {
      id: 4,
      status: 'inactive',
      date_created: '2021-10-11',
      name: 'Оплата интернета',
      price: 850,
    },
    {
      id: 5,
      status: 'active',
      date_created: '2021-10-10',
      name: 'Покупка велосипеда',
      price: 4350,
    },
    {
      id: 15,
      status: 'active',
      date_created: '2021-10-04',
      name: 'Посещение спортзала',
      price: 3680,
    },
    {
      id: 7,
      status: 'inactive',
      date_created: '2021-10-11',
      name: 'Покупка одежды',
      price: 4890,
    },
    {
      id: 2,
      status: 'inactive',
      date_created: '2021-10-11',
      name: 'Оплата коммунальных услуг',
      price: 2500,
    },
    {
      id: 1,
      status: 'active',
      date_created: '2021-10-10',
      name: 'Покупка машины',
      price: 1000,
    },
    {
      id: 22,
      status: 'active',
      date_created: '2021-10-16',
      name: 'Абонемент в кино',
      price: 4678,
    },
    {
      id: 10,
      status: 'active',
      date_created: '2021-10-10',
      name: 'Покупка часов',
      price: 5890,
    },
    {
      id: 8,
      status: 'inactive',
      date_created: '2021-10-11',
      name: 'Покупка косметики',
      price: 5000,
    },
    {
      id: 18,
      status: 'active',
      date_created: '2021-10-15',
      name: 'Покупка игровой приставки',
      price: 6756,
    },
    {
      id: 25,
      status: 'active',
      date_created: '2021-10-16',
      name: 'Покупка акций',
      price: 7051,
    },
    {
      id: 3,
      status: 'active',
      date_created: '2021-10-12',
      name: 'Посещение ресторана',
      price: 3200,
    },
    {
      id: 16,
      status: 'inactive',
      date_created: '2021-10-31',
      name: 'Благотворительный взнос',
      price: 4160,
    },
    {
      id: 12,
      status: 'inactive',
      date_created: '2021-10-03',
      name: 'Покупка велосипеда',
      price: 8334,
    },
    {
      id: 17,
      status: 'active',
      date_created: '2021-10-10',
      name: 'Подписка на сервис',
      price: 3745,
    },
    {
      id: 13,
      status: 'active',
      date_created: '2021-10-23',
      name: 'Курс по программированию',
      price: 8381,
    },
  ])

  const filters = ref<Partial<Record<keyof Service, string>>>({})

  const filteredServices = computed(() =>
    services.value.filter((service) =>
      Object.entries(filters.value).every(([key, value]) => {
        if (!value) return true

        if ((key === 'id' || key === 'price') && typeof value === 'number') {
          return service[key] === value
        }

        if (typeof value === 'string') {
          return service[key as keyof Service]?.toString().includes(value)
        }
      })
    )
  )

  return { services, filters, filteredServices }
})
