import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { News } from './entities/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNewsInput } from './dto/create-news.input';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepo: Repository<News>,
  ) {}

  async create(createNewsInput: CreateNewsInput) {
    const news = this.newsRepo.create(createNewsInput);
    return await this.newsRepo.save(news);
  }

  findAll() {
    return this.newsRepo.find();
  }
}
