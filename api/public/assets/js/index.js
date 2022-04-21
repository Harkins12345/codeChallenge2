const storyForm = document.getElementById('story-form');

storyForm.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target['title-text'].value.trim() &&
        e.target['name-text'].value.trim() &&
        e.target['story-text'].value.trim()) {
        const postData = {
            title: e.target['title-text'].value.trim(),
            author: e.target['name-text'].value.trim(),
            story: e.target['story-text'].value.trim()
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        }

        storyForm.reset();

        fetch(`${window.location.origin}/posts`, options)
            .then(r => r.json())
            .then(data => window.location.assign(`${window.location.origin}/posts/${data.id}`))
            .catch(err => console.log(err));
    }
})