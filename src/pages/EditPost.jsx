import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Services from '../appwrite/config';
import { Container, PostForm } from '../components';

function EditPost(){
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const appwriteService = new Services()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((posts) => {
                if(posts){
                    setPosts(posts)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])

    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm posts = {posts}/>
            </Container>
        </div>
    ) : null

}

export default EditPost
