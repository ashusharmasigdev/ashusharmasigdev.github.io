function MenuButtonClick()
{
    const ActiveStr = "activated-menu";
    const WinJsTopNavigationBar = document.getElementById("window-js-navbar");
    const WinJsResponsiveMenuBar = document.getElementById("winjs-mobile-navigator");
    const WinJsResponsiveMenuActivator = document.getElementById("menu-activator");

    if(WinJsResponsiveMenuBar.classList.contains(ActiveStr))
    {
        /** Navigation bar is already active */
        WinJsResponsiveMenuBar.classList.remove(ActiveStr);
        WinJsResponsiveMenuActivator.classList.remove("active-mode");
    }
    else
    {
        /** Navigation bar should now active */
        WinJsResponsiveMenuBar.classList.add(ActiveStr);
        WinJsResponsiveMenuActivator.classList.add("active-mode");
    }
}