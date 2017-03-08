import { Component, OnInit } from '@angular/core';

import { ContentService } from '../../_services/content.service';

import { PostData } from '../../_models/post';

@Component({
	moduleId: module.id,
	selector: 'post-admin',
	templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsAdminComponent implements OnInit {

	posts: PostData[] = [];

	ngOnInit() {
		this.contentService.getPosts()
			.then((posts: PostData[]) => {
				this.posts = posts;
			});
	}

	delete(id: string) {
		this.contentService.removePost(id)
			.then((posts: PostData) => {
				this.contentService.getPosts()
					.then((posts: PostData[]) => {
						this.posts = posts;
					});
			});
	}

	constructor(private contentService: ContentService) {}

}