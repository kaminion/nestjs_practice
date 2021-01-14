import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // individual test(it)
  // it('test name is free', ()=>{
  //   // toEqaul 같기를 expect 기대한다... 기본적으로 다른 테스팅 도구랑 비슷
  //   expect(2 + 3).toEqual(5);
  // })

  // 같은 이름일 필요없다, describe는 여러 테스트 케이스를 묶을 수 있음
  describe("getAll", ()=>{

    it("should return an array", ()=>{
      // 현재 서비스 주입받아져있음
      const result = service.getAll();

      // 배열 리턴 확인
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe("getOne", ()=>{
    // getOne 테스트 전에 검증할 데이터 더미 생성


    it('should return a movie', ()=>{

      service.create({
        title:"Test Movie",
        genres:['test'],
        year:2000
      });
      
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1); // 1

    }); // EOT

    it("should throw 404 error", ()=>{
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException); //에러 리턴
        expect(e.message).toEqual(`Movie with ID: 999 not found`);
      }

    }); // EOT
    
    

  }); // EOD 

  describe("deleteOne", ()=>{

    it('deletes a movie', ()=>{
        service.create({
          title:"Test Movie",
          genres:['test'],
          year:2000
        });
        
        const beforeDelete = service.getAll().length;
        service.deleteOne(1);
        const afterDelete = service.getAll().length;
        // 삭제했으니 삭제전 length - 1과 삭제 후 length가 같아야함.
        expect(afterDelete).toBeLessThan(beforeDelete)
    });

    it('return 404', ()=>{
      try{
        service.deleteOne(999)
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);

      }
    })

  }); // EOD

  describe("create", ()=>
  {
    it("should create a movie", ()=>{
      const beforeCreate = service.getAll().length;

      service.create({
        title:"Test Movie",
        genres:['test'],
        year:2000
      });

      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate)
      expect(afterCreate).toBeGreaterThan(beforeCreate);

    });
  })

});
