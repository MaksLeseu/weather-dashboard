import './styles.css';

export const Preloader = () => {
    return (
        <div className={'preloader'}>
            <div className={'preloader_container'}>
                <div className={'preloader_item'}></div>
                <div className={'preloader_item'}></div>
                <div className={'preloader_item'}></div>
                <div className={'preloader_item'}></div>
                <div className={'preloader_item'}></div>
            </div>
        </div>
    )
}