import Swal from 'sweetalert2'
type Toast = {
    message: string,
    title?: string,
    confirmButtonText?: string
} | string

export default defineNuxtPlugin((nuxtApp) => {

    return {
        provide: {
            swal: {
                error: (n: Toast) => {
                    if (typeof n === 'string')
                        n = { message: n }

                    Swal.fire({
                        title: n.title || 'خطا',
                        text: n.message,
                        icon: 'error',
                        confirmButtonText: n.confirmButtonText || 'باشه'
                    })
                },
                success: (n: Toast) => {
                    if (typeof n === 'string')
                        n = { message: n }

                    Swal.fire({
                        title: n.title || 'با موفقیت انجام شد',
                        text: n.message,
                        icon: 'success',
                        confirmButtonText: n.confirmButtonText || 'باشه'
                    })

                },

                about: (n: Toast) => {
                    if (typeof n === 'string')
                        n = { message: n }

                    Swal.fire({
                        title: n.title || 'توجه',
                        text: n.message,
                        icon: 'info',
                        confirmButtonText: n.confirmButtonText || 'باشه'
                    })

                }
            }
        }
    }
})