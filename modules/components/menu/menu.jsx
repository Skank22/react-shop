import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';

import s from './menu';

export class Menu extends Component {
    render() {
        return (
            <div className={s.navSections}>
                <ul className={s.navList}>
                    <li className={s.navItem}>
                        <Link to="/man" className={s.navLink}>Мужчины</Link>
                        <div className={s.navContent}>
                            <ul className={s.navSublist}>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <Link  to="/man/collection">Коллекции</Link>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/new">Новинки</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/winter">Теплые вещи</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/exclusive">Эксклюзивно Online</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/base-model">Базовые Модели</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/motorsport">BMW Motorsport</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/sneakers-and-clothes-mercedes">Mercedes AMG Petronas</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/red-bull-racing">Red Bull Racing</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/scuderia-ferrari">Scuderia Ferrari</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/select">SELECT</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/suede">Suede</Link>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <Link to="/men/collection/trinomic">Trinomic</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv.html">
                                            Обувь </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/krossovki.html"
                                               >
                                                Кроссовки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/kedy.html"
                                               >
                                                Кеды </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/motorsport.html"
                                               >
                                                Автоспорт </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/butsy-dlja-futbola.html"
                                               >
                                                Бутсы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/krossovki-dlja-bega.html"
                                               >
                                                Для бега </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/krossovki-dlja-fitnesa.html"
                                               >
                                                Для тренировок </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/obuv/shlepansy-i-slancy.html"
                                               >
                                                Шлёпанцы и сланцы </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda.html">
                                            Одежда </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/sportivnye-shtany.html"
                                               >
                                                Штаны </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/kurtki.html"
                                               >
                                                Куртки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/leginsy.html"
                                               >
                                                Леггинсы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/olimpiiki.html"
                                               >
                                                Олимпийки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/polo.html"
                                               >
                                                Поло </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/sportivnye-kostumy.html"
                                               >
                                                Спортивные костюмы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/tolstovki-i-hudi.html"
                                               >
                                                Толстовки и худи </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/futbolki-i-majki.html"
                                               >
                                                Футболки и майки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/odezhda/shorty.html"
                                               >
                                                Шорты </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary.html">
                                            Аксессуары </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/kepki-i-bejsbolki.html"
                                               >
                                                Головные уборы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/koshelki-bumazhniki.html"
                                               >
                                                Кошельки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/sportivnoe-nizhnee-belie.html"
                                               >
                                                Нижнее белье </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/noski.html"
                                               >
                                                Носки и гетры </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/remni.html"
                                               >
                                                Ремни </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/rukzaki.html"
                                               >
                                                Рюкзаки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/sportivnyi-inventar.html"
                                               >
                                                Спортивные аксессуары </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/sumki.html"
                                               >
                                                Сумки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/aksessuary/zimnie-aksessuary.html"
                                               >
                                                Теплые аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/sport.html">
                                            Спорт </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/sport/motorsport.html"
                                               >
                                                Автоспорт </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/sport/dlja-bega.html"
                                               >
                                                Бег </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/sport/dlja-futbola.html"
                                               >
                                                Футбол </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-muzhchin/sport/dlja-fitnesa-i-trenazhernogo-zala.html"
                                               >
                                                Тренинг </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.navItem}>
                        <Link to="/woman" className={s.navLink}>Женщины</Link>
                        <div className={s.navContent}>
                            <ul className="nav-sub-list level0 submenu">
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <Link  to="/woman/collection">Коллекции</Link>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/novinki.html"
                                               >
                                                Новинки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/winterized.html"
                                               >
                                                Теплые вещи </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/eksklusivno-onlain.html"
                                               >
                                                Эксклюзивно online </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/bazovye-modeli.html"
                                               >
                                                Базовые модели </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/en-pointe.html"
                                               >
                                                En Pointe </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/ferrari.html"
                                               >
                                                Scuderia Ferrari </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/select.html"
                                               >
                                                SELECT </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/suede.html"
                                               >
                                                Suede </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/kollekcii/velvet-rope.html"
                                               >
                                                Velvet Rope </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv.html">
                                            Обувь </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/krossovki.html"
                                               >
                                                Кроссовки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/kedy.html"
                                               >
                                                Кеды </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/motorsport.html"
                                               >
                                                Автоспорт </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/boots.html"
                                               >
                                                Ботинки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/krossovki-dlja-bega.html"
                                               >
                                                Для бега </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/trenirovki-v-zale.html"
                                               >
                                                Для тренировок </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/obuv/shlepansy-i-slancy.html"
                                               >
                                                Шлёпанцы и сланцы </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda.html">
                                            Одежда </a>
                                    </div>
                                    <ul className={s.navSubmenu}>

                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/sportivnye-shtany.html"
                                               >
                                                Штаны </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/zhilety.html"
                                               >
                                                Жилеты </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/kurtki.html"
                                               >
                                                Куртки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/leginsy.html"
                                               >
                                                Леггинсы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/kofta-na-molnii.html"
                                               >
                                                Олимпийки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/platya-i-ubki.html"
                                               >
                                                Платья и юбки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/polo.html"
                                               >
                                                Поло </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/sportivnye-kostumy.html"
                                               >
                                                Спортивные костюмы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/tolstovki-i-hudi.html"
                                               >
                                                Толстовки и худи </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/sportivnyj-top.html"
                                               >
                                                Топы и бра </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/futbolki-i-majki.html"
                                               >
                                                Футболки и майки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/odezhda/shorty-i-kombinezony.html"
                                               >
                                                Шорты и комбинезоны </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary.html">
                                            Аксессуары </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/shapki-i-kepki.html"
                                               >
                                                Головные уборы </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/koshelki-portmone.html"
                                               >
                                                Кошельки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/sportivnoe-nizhnee-belie.html"
                                               >
                                                Нижнее белье </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/noski.html"
                                               >
                                                Носки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/rukzaki.html"
                                               >
                                                Рюкзаки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/sportivnyi-inventar.html"
                                               >
                                                Спортивные аксессуары </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/sumki.html"
                                               >
                                                Сумки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/aksessuary/zimnie-aksessuary.html"
                                               >
                                                Теплые аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/sport.html">
                                            Спорт </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/sport/motorsport.html"
                                               >
                                                Автоспорт </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/sport/dlja-bega.html"
                                               >
                                                Бег </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-zhenshhin/sport/dlja-fitnesa-i-trenazhernogo-zala.html"
                                               >
                                                Тренинг </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.navItem}>
                        <span className={s.navLink}>Спорт</span>
                        <div className={s.navContent}>
                            <ul className="nav-sub-list level0 submenu">
                                <li className="nav-sub-item level1 parent tile">
                                    <div className={s.navSubItemTitle}>
                                        <span >Спорт</span>
                                    </div>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/sport/dlja-bega.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/PNA_042817_Netfit-Nav.jpg"/>
                                                Бег </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/sport/vse-dlja-trenirovok.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17SS_BTL_ECOM_RT_VelvetRope-Kylie_Sub_Nav_Thumb_85x85_1.png"/>
                                                Тренинг </a>
                                        </li>
                                    </ul>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/sport/dlja-futbola.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/football.jpg"/>
                                                Футбол </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-sub-item level1 parent tile">
                                    <div className={s.navSubItemTitle}>
                                        <span >Команды</span>
                                    </div>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/komandy/arsenal.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/Nav_Teams_Arsenal.png"/>
                                                Арсенал </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/komandy/bvb.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/borussia.png"/>
                                                Боруссия </a>
                                        </li>
                                    </ul>

                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/komandy/italia.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/italia.png"/>
                                                Италия </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/komandy/krasnodar.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/FC_Krasnodar_LOGO-NEW.png"/>
                                                Краснодар </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-sub-item level1 parent tile">
                                    <div className={s.navSubItemTitle}>
                                        <span >Автоспорт</span>
                                    </div>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/motorsport/krossovki-i-odezhda-ferrari.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_MS_Ferrari_NavCircle_85x85_2.png"/>
                                                Scuderia Ferrari </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/motorsport/krossovki-i-odezhda-bmw.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_MS_BMW_Nav-Circles_85x85_1.png"/>
                                                BMW Motorsport </a>
                                        </li>
                                    </ul>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/motorsport/mercedes-amg-petronas.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_MS_Mercedes_Nav-Circles_85x85_1.png"/>

                                                Mercedes AMG Petronas </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/sport/motorsport/red-bull-racing.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_MS_Red-Bull_Nav-Circles_85x85_1.png"/>
                                                Red Bull Racing </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.navItem}>
                        <span className={s.navLink}>Коллекции</span>
                        <div className={s.navContent}>
                            <ul className="nav-sub-list level0 submenu">
                                <li className="nav-sub-item level1 parent tile">
                                    <div className={s.navSubItemTitle}>
                                        <span >Коллаборации</span>
                                    </div>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/kollaborazii/puma-by-rihanna.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/avidfenty.png"/>
                                                Fenty X PUMA by Rihanna </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/kollaborazii/puma-x-xo.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/xonav.png"/>
                                                PUMA X XO </a>
                                        </li>
                                    </ul>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/kollaborazii/suede-50.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_SP_Suede-50_Sub_Nav_Thumb_85x85_1.png"/>
                                                SUEDE 50 </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-sub-item level1 parent tile">
                                    <div className={s.navSubItemTitle}>
                                        <span >Select</span>
                                    </div>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-sophia-webster.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/sophiatap.png"/>
                                                PUMA X SOPHIA WEBSTER </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-diamond.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/Diamond3.jpg"/>
                                                PUMA X DIAMOND </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-han.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/han.png"/>
                                                PUMA X HAN </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-hello-kitty.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/kitty2.png"/>
                                                PUMA X HELLO KITTY </a>
                                        </li>
                                    </ul>
                                    <ul className="submenu level1">
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-big-sean.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/bigsean.png"/>
                                                PUMA X Big Sean </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-shantell-martin.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/shantel_nav3.png"/>
                                                PUMA X SHANTELL MARTIN </a>
                                        </li>
                                        <li className="submenu-item submenu-item-tile level2">
                                            <a href="https://ru.puma.com/kollekcii/select/puma-x-naturel.html"
                                               >
                                                <img src="https://ru.puma.com/media/catalog/category/17AW_BTL_ECOM_SP_Naturel_Sub_Nav_Thumb_85x85_2.png"/>
                                                PUMA X NATUREL </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.navItem}>
                        <Link to="/for-children" className={s.navLink}>Дети</Link>
                        <div className={s.navContent}>
                            <ul className="nav-sub-list level0 submenu">
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii.html">
                                            Коллекции </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/novinki.html"
                                               >
                                                Новинки </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/puma-x-tinysottons.html"
                                               >
                                                PUMA X TINYCOTTONS </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/eksklusivno-onlain.html"
                                               >
                                                Эксклюзивно Online </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/bazovye-modeli.html"
                                               >
                                                Базовые модели </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/motorsport.html"
                                               >
                                                Автоспорт </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/arsenal.html"
                                               >
                                                Арсенал </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/min-ony.html"
                                               >
                                                Minions </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/ulitsa-sesam.html"
                                               >
                                                Sesame Street </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/kollekcii/justice-league.html"
                                               >
                                                Justice League </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-malchikov.html">
                                            Мальчики </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-malchikov/obuv.html"
                                               >
                                                Обувь </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-malchikov/odezhda.html"
                                               >
                                                Одежда </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-malchikov/aksessuary.html"
                                               >
                                                Аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-devochek.html">
                                            Девочки </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-devochek/obuv.html"
                                               >
                                                Обувь </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-devochek/odezhda.html"
                                               >
                                                Одежда </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/sportivnye-tovary-dlja-detej/dlja-devochek/aksessuary.html"
                                               >
                                                Аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.navItem}>
                        <Link to="/sales" className={s.navLink}>Распродажа</Link>
                        <div className={s.navContent}>
                            <ul className="nav-sub-list level0 submenu">
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/skidki/dlja-muzhchin.html">
                                            Мужчины </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-muzhchin/rasprodazha-obuvi.html"
                                               >
                                                Обувь </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-muzhchin/rasprodazha-sportivnoj-odezhdy.html"
                                               >
                                                Одежда </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-muzhchin/aksessuary.html"
                                               >
                                                Аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/skidki/dlja-zhenshhin.html">
                                            Женщины </a>
                                    </div>
                                    <ul className={s.navSubmenu}>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-zhenshhin/rasprodazha-obuvi.html"
                                               >
                                                Обувь </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-zhenshhin/rasprodazha-sportivnoj-odezhdy.html"
                                               >
                                                Одежда </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-zhenshhin/aksessuary.html"
                                               >
                                                Аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={s.navSubItem}>
                                    <div className={s.navSubItemTitle}>
                                        <a 
                                           href="https://ru.puma.com/skidki/dlja-detey.html">
                                            Дети </a>
                                    </div>
                                    <ul className={s.navSubmenu}>

                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-detey/rasprodazha-obuvi.html"
                                               >
                                                Обувь </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-detey/rasprodazha-sportivnoj-odezhdy.html"
                                               >
                                                Одежда </a>
                                        </li>
                                        <li className={s.navSubmenuItem}>
                                            <a href="https://ru.puma.com/skidki/dlja-detey/aksessuary.html"
                                               >
                                                Аксессуары </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}