/* eslint-disable no-useless-concat */
function ExpandedContent({ data, model, setModel }) {
    const { height, name, weight, image, type, stats } = data;
    return (
       model&& <div className={'expanded-overlay ' +`${type}`}>
            <button className='close-button' onClick={() => { setModel(false) }}>X</button>
            <div className='expanded-left'>
                <img className='expanded-image ' src={image} alt={name} />
                <h3 className='expanded-name'>{name}</h3>
            </div>
            <div className='expanded-right'>
                <table className='expanded-table '>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Weight:</td>
                                        <td>{weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Height:</td>
                                        <td>{height}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {stats.map((stat, index) => {
                                        return (
                                            <tr>
                                                <td>Stat:{index + 1}</td>
                                                <td>{stat.base_stat}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>

                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {stats.map((stat, index) => {
                                        return (
                                            <tr>
                                                <td>Bs:{index + 1}</td>
                                                <td>{stat.stat.name}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>

                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default ExpandedContent;