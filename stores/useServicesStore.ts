import { defineStore } from 'pinia'

export type Service = {
  id: number
  status: 'active' | 'inactive'
  date_created: string
  name: string
  price: number
}

export type Filters = Partial<
  Record<Exclude<keyof Service, 'price'> | 'minPrice' | 'maxPrice', string>
>

export const useServicesStore = defineStore('services-store', () => {
  const services = ref<Service[]>([
    {
      id: 23,
      status: 'inactive',
      date_created: '02.10.2025',
      name: 'Покупка мебели',
      price: 3538,
    },
    {
      id: 6,
      status: 'active',
      date_created: '12.10.2025',
      name: 'Покупка квартиры',
      price: 2000,
    },
    {
      id: 9,
      status: 'active',
      date_created: '12.03.2025',
      name: 'Оплата обучения',
      price: 6420,
    },
    {
      id: 24,
      status: 'active',
      date_created: '28.02.2025',
      name: 'Покупка бытовой техники',
      price: 8140,
    },
    {
      id: 19,
      status: 'active',
      date_created: '20.10.2025',
      name: 'Покупка телефона',
      price: 790,
    },
    {
      id: 21,
      status: 'inactive',
      date_created: '28.10.2025',
      name: 'Ремонт квартиры',
      price: 7531,
    },
    {
      id: 14,
      status: 'active',
      date_created: '05.10.2025',
      name: 'Путешествие',
      price: 6652,
    },
    {
      id: 20,
      status: 'active',
      date_created: '07.10.2025',
      name: 'Покупка мебели',
      price: 1268,
    },
    {
      id: 11,
      status: 'inactive',
      date_created: '11.10.2025',
      name: 'Покупка книг',
      price: 3120,
    },
    {
      id: 4,
      status: 'inactive',
      date_created: '11.10.2025',
      name: 'Оплата интернета',
      price: 850,
    },
    {
      id: 5,
      status: 'active',
      date_created: '10.10.2025',
      name: 'Покупка велосипеда',
      price: 4350,
    },
    {
      id: 15,
      status: 'active',
      date_created: '04.10.2025',
      name: 'Посещение спортзала',
      price: 3680,
    },
    {
      id: 7,
      status: 'inactive',
      date_created: '11.10.2025',
      name: 'Покупка одежды',
      price: 4890,
    },
    {
      id: 2,
      status: 'inactive',
      date_created: '11.10.2025',
      name: 'Оплата коммунальных услуг',
      price: 2500,
    },
    {
      id: 1,
      status: 'active',
      date_created: '10.10.2025',
      name: 'Покупка машины',
      price: 1000,
    },
    {
      id: 22,
      status: 'active',
      date_created: '16.10.2025',
      name: 'Абонемент в кино',
      price: 4678,
    },
    {
      id: 10,
      status: 'active',
      date_created: '10.04.2025',
      name: 'Покупка часов',
      price: 5890,
    },
    {
      id: 8,
      status: 'inactive',
      date_created: '11.104.2025',
      name: 'Покупка косметики',
      price: 5000,
    },
    {
      id: 18,
      status: 'active',
      date_created: '15.10.2025',
      name: 'Покупка игровой приставки',
      price: 6756,
    },
    {
      id: 25,
      status: 'active',
      date_created: '16.10.2025',
      name: 'Покупка акций',
      price: 7051,
    },
    {
      id: 3,
      status: 'active',
      date_created: '12.10.2025',
      name: 'Посещение ресторана',
      price: 3200,
    },
    {
      id: 16,
      status: 'inactive',
      date_created: '31.10.2025',
      name: 'Благотворительный взнос',
      price: 4160,
    },
    {
      id: 12,
      status: 'inactive',
      date_created: '03.10.2025',
      name: 'Покупка велосипеда',
      price: 8334,
    },
    {
      id: 17,
      status: 'active',
      date_created: '10.10.2025',
      name: 'Подписка на сервис',
      price: 3745,
    },
    {
      id: 13,
      status: 'active',
      date_created: '23.10.2025',
      name: 'Курс по программированию',
      price: 8381,
    },
  ])

  const filters = ref<Filters>({})

  const filteredServices = computed(() =>
    services.value.filter((service) =>
      Object.entries(filters.value).every(([key, value]) => {
        if (!value) return true

        if (key === 'id') {
          return service.id === +value
        }

        if (key === 'status') {
          return service.status === value
        }

        if (key === 'date_created') {
        }

        if (key === 'name') {
          return service.name.toString().includes(value)
        }

        if (['minPrice', 'maxPrice'].includes(key)) {
          if (key === 'minPrice') return service.price >= +value
          if (key === 'maxPrice') return service.price <= +value
        }

        return true
      })
    )
  )

  function setFilters(data: Filters) {
    filters.value = Object.assign({}, data)
  }

  return { services: filteredServices, filters, setFilters }
})
