import React from "react";
import {InputText} from "./input/InputText";
import {observer} from "mobx-react";
import {useStores} from "../../../data/context/UseStore";
import {Author} from "../../../data/model/Author";
import {CRUDMenu} from "../menu/CRUDMenu";
import {ModalDeleteView} from "../modal/views/ModalDeleteView";
import {BaseModalView} from "../../base/BaseModalView";
import {Card, Grid, GridColumn, GridRow, Image} from "semantic-ui-react";
import profile from "../../../images/profile.png"

export const AuthorForm: React.FC<any> = observer((props) => {
    const {authorStore, viewStore} = useStores()
    const selectedAuthor = {...authorStore.selectedAuthor} as Author

    const onChange = (name: string, value: string) => {
        let currentAuthor = {...selectedAuthor, [name]: value} as unknown as Pick<Author, keyof Author>
        authorStore.selectAuthor(currentAuthor)
    }

    const onAddClicked = () => {
        if (selectedAuthor) {
            authorStore.addAuthor(selectedAuthor)
        }
    }

    const onEditClicked = () => {
        if (selectedAuthor) {
            authorStore.updateAuthor(selectedAuthor)
        }
    }

    const onCleanClicked = () => {
        if (selectedAuthor) {
            authorStore.selectAuthor()
        }
    }

    const onDeleteClicked = () => {
        if (selectedAuthor) {
            viewStore.setModalView({
                onConfirmAction: () => {
                    authorStore.deleteAuthor(selectedAuthor)
                },
                view: (<ModalDeleteView title="Delete author" toDelete={selectedAuthor.name}/>)
            } as BaseModalView)
        }
    }

    return (
        <Card fluid>
            <Card.Content>
                <Grid divided columns={2}>
                    <GridRow padded={"true"}>
                        <GridColumn width={5}>
                            <Image wrapped src={selectedAuthor?.picUrl ?? profile} size='small' rounded/>
                        </GridColumn>
                        <GridColumn width={11}>
                            <InputText label="Name" name="name" onChange={onChange}
                                       defaultValue={selectedAuthor?.name}/>
                            <br/>
                            <InputText label="Pic. URL" name="picUrl" onChange={onChange}
                                       defaultValue={selectedAuthor?.picUrl}/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Card.Content>
            <Card.Content extra>
                <CRUDMenu
                    hasId={selectedAuthor ? (!!selectedAuthor.id) : false}
                    onDeleteClicked={onDeleteClicked}
                    onEditClicked={onEditClicked}
                    onAddClicked={onAddClicked}
                    onCleanClicked={onCleanClicked}/>
            </Card.Content>
        </Card>
    )
})
