const ToastLibrary = (function () {
    const notifications = document.querySelector(".notifications");

    const addStylesheet = (href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    };
    
    addStylesheet("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
    

    const toastDetails = {
        timer: 5000,
        success: {
            icon: 'fa-circle-check',
            text: 'Success: This is a success toast.',
        },
        error: {
            icon: 'fa-circle-xmark',
            text: 'Error: This is an error toast.',
        },
        warning: {
            icon: 'fa-triangle-exclamation',
            text: 'Warning: This is a warning toast.',
        },
        info: {
            icon: 'fa-circle-info',
            text: 'Info: This is an information toast.',
        }
    };

    const removeToast = (toast) => {
        toast.classList.add("hide");
        if (toast.timeoutId) clearTimeout(toast.timeoutId);
        setTimeout(() => toast.remove(), 500);
    };

    const createToast = (message, type) => {
        const { icon, text } = toastDetails[type];
        const toast = document.createElement("li");
        toast.className = `toast ${type}`;
        toast.innerHTML = `<div class="column">
                              <i class="fa-solid ${icon}"></i>
                              <span>${message}</span>
                           </div>
                           <i class="fa-solid fa-xmark" onclick="ToastLibrary.removeToast(this.parentElement)"></i>`;
        notifications.appendChild(toast);
        toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
    };

    const popToast = (message, type) => {
        if (toastDetails[type]) {
            createToast(message, type);
        } else {
            console.error("Invalid toast type");
        }
    };

    return {
        popToast,
        removeToast,
    };
})();


window.popToast = ToastLibrary.popToast;
window.removeToast = ToastLibrary.removeToast;
