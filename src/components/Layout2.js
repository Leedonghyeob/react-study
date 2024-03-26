import {NavLink, Outlet} from "react-router-dom"

export default function Layout2(){
    return(
        <>
            <nav>
                <a href ="/">Home</a>&nbsp;
                <NavLink to="/component/class">클래스 컴포넌트</NavLink>
                <NavLink to="/component/functional">함수형 컴포넌트</NavLink>
                <NavLink to="/hook/context">UseContext 테스트</NavLink>
                <NavLink to="/adressBook">주소록</NavLink>
            </nav>
            <main>
                <section>
                    {
                        /*
                            상단 메뉴에서클릭된 경로(path) 기준으로
                            해당되는 컴포넌트가표시
                        */
                    }
                    <Outlet />
                </section>
            </main>
        
        </>
    )
}