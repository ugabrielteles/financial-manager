export type ActionProps = {
    type?: string;
    color?: string;
    action?: () => void;
    disabled?: boolean;
    name: string;
    icon?: any
}

export type PageTitleProps = {
    title: string,
    subTitle?: string,
    actions?: ActionProps[]
}

export default function PageTitle({ title, subTitle, actions }: PageTitleProps) {

    const onClickAction = (event: any, action?: () => void) => {
        if (action) action()
    }


    return (
        <div className="flex justify-between mb-6">
            <div className="col-start-1 col-end-7">
                <h3 className="block text-2xl font-bold text-gray-800  dark:text-white">{title}</h3>
                {subTitle && <p className="text-sm text-gray-800 dark:text-gray-400">{subTitle}</p>}
            </div>

            <div>
                {
                    actions && actions.map((act, i) => {
                        return (
                            <button type="button" key={'act-' + i} onClick={(event) => onClickAction(event, act.action)} className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-${act.color ?? 'indigo'}-500 text-white hover:bg-${act.color ?? 'indigo'}-600 focus:outline-none focus:ring-2 focus:ring-${act.color ?? 'indigo'}-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}>
                                {act.name ?? 'Button'}
                                {act.icon}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}