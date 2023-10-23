'use client';
import { useContext, useState } from 'react';
import style from './tab.module.css';
import { TabContext } from './TabProvider';

export default function Tab() {
    const { tab, setTab } = useContext(TabContext);

    function onClickTab() {
        if (tab === 'rec') setTab('fol');
        else setTab('rec');
    }

    return (
        <div className={style.homeFixed}>
            <div className={style.homeText}>홈</div>
            <div className={style.homeTab}>
                <div onClick={onClickTab}>
                    추천
                    <div className={style.tabIndicator} hidden={tab === 'fol'}></div>
                </div>

                <div onClick={onClickTab}>
                    팔로우 중<div className={style.tabIndicator} hidden={tab === 'rec'}></div>
                </div>
            </div>
        </div>
    );
}
